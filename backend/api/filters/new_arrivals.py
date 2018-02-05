from datetime import datetime, timedelta
from django.utils import timezone

from rest_framework import filters


class AuctionNewArrivalsFilterBackend(filters.BaseFilterBackend):
    """
    Filters medium list with month dates
    """
    def filter_queryset(self, request, queryset, view):
        new_arrivals = request.query_params.get('new-arrivals')
        if new_arrivals:
            start_date = datetime.now() - timedelta(days=7)
            queryset = queryset.filter(started_at__gte=start_date)

        return queryset
