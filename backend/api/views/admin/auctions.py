import random
from datetime import timedelta

from django.db import transaction
from django.shortcuts import get_object_or_404
from django.utils import timezone

from rest_framework import generics
from rest_framework import views
from rest_framework.exceptions import ParseError
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.filters.status import StatusFilterBackend
from api.serializers.auctions import AuctionSerializer
from api.serializers.auctions import AuctionAdminSerializer
from api.serializers.auctions import StartAuctionSerializer
from api.serializers.auctions import BidWithUserDetailSerializer
from api.serializers.auctions import BidStatusChangeSerializer
from api.serializers.auctions import SaleSerializer
from api.serializers.auctions import SaleNoteSerializer
from api.serializers.auctions import AuctionBacklogSerializer
from api.paginations import TenPerPagePagination
from api.permissions import IsAdmin
from auction.constants import AUCTION_STATUS_PREVIEW
from auction.constants import AUCTION_STATUS_CANCELLED
from auction.constants import AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS
from auction.constants import AUCTION_STATUS_WAITING_TO_SHIP
from auction.models import Auction
from auction.models import Bid
from auction.models import Sale
from common.exceptions import PaymentRequired


class AuctionListView(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    queryset = Auction.objects.order_by('pk') \
        .select_related('product') \
        .select_related('product__donor') \
        .prefetch_related('product__donor__charities') \
        .prefetch_related('product__media')
    serializer_class = AuctionAdminSerializer
    pagination_class = TenPerPagePagination
    filter_backends = (StatusFilterBackend, )


class AuctionDetailView(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = AuctionAdminSerializer
    lookup_url_kwarg = 'pk'
    queryset = Auction.objects.select_related('product')

    def destroy(self, *args, **kwargs):
        auction = self.get_object()
        if auction.status not in [
            AUCTION_STATUS_PREVIEW,
            AUCTION_STATUS_CANCELLED,
            AUCTION_STATUS_CANCELLED_DUE_TO_NO_BIDS
        ]:
            raise ParseError('Only auctions in preview or cancelled status can be deleted')
        return super(AuctionDetailView, self).destroy(*args, **kwargs)


class AuctionStartView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = AuctionSerializer
    lookup_url_kwarg = 'pk'
    queryset = Auction.objects.select_related('product')

    def post(self, *args, **kwargs):
        serializer = StartAuctionSerializer(data=self.request.data)
        serializer.is_valid(raise_exception=True)
        if serializer.validated_data['open_until']:
            open_until = serializer.validated_data['open_until']
        else:
            open_until = timezone.now() + timedelta(
                days=serializer.validated_data['duration_days'],
                hours=serializer.validated_data['duration_hours'],
                minutes=serializer.validated_data['duration_minutes'],
            )

        auction = self.get_object()
        auction.start(open_until)

        serializer = self.get_serializer(auction)
        return Response(serializer.data)


class AuctionFinishView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = AuctionSerializer
    lookup_url_kwarg = 'pk'
    queryset = Auction.objects.select_related('product')

    def post(self, *args, **kwargs):
        auction = self.get_object()
        auction.finish()

        serializer = self.get_serializer(auction)
        return Response(serializer.data)


class AuctionCancelView(generics.GenericAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = AuctionSerializer
    lookup_url_kwarg = 'pk'
    queryset = Auction.objects.select_related('product')

    def post(self, *args, **kwargs):
        auction = self.get_object()
        auction.cancel()

        serializer = self.get_serializer(auction)
        return Response(serializer.data)


class AuctionBidListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = BidWithUserDetailSerializer
    pagination_class = TenPerPagePagination
    filter_backends = (StatusFilterBackend, )

    def get_queryset(self):
        auction_pk = self.kwargs.get('pk', None)
        return Bid.objects.filter(auction=auction_pk).order_by('-price').select_related('user')


class AuctionBidStatusChangeView(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = BidStatusChangeSerializer
    lookup_url_kwarg = 'bid_pk'

    def get_queryset(self):
        auction_pk = self.kwargs.get('pk', None)
        return Bid.objects.filter(auction=auction_pk)


class SaleListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    queryset = Sale.objects.order_by('pk') \
        .prefetch_related('product__donor__charities') \
        .select_related('user')
    serializer_class = SaleSerializer
    pagination_class = TenPerPagePagination


class SaleDetailView(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = SaleSerializer
    lookup_url_kwarg = 'pk'
    queryset = Sale.objects.all()


class SaleNoteView(generics.UpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    serializer_class = SaleNoteSerializer
    lookup_url_kwarg = 'pk'
    queryset = Sale.objects.all()


class AuctionBacklogListView(generics.ListAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    queryset = Auction.objects.order_by('pk') \
        .select_related('sale') \
        .select_related('product') \
        .select_related('product__donor') \
        .prefetch_related('product__donor__charities') \
        .prefetch_related('product__media')
    serializer_class = AuctionBacklogSerializer
    pagination_class = TenPerPagePagination
    filter_backends = (StatusFilterBackend, )
