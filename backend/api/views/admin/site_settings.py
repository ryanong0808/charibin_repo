from rest_framework import generics
from rest_framework import views
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from api.permissions import IsAdmin
from api.serializers.site_settings import SiteSettingsSerializer
from site_settings.types import SITE_SETTINGS_CHOICES
from site_settings.models import SiteSettings


class SiteSettingsListView(views.APIView):
    permission_classes = (IsAuthenticated, IsAdmin,)

    def get(self, *args, **kwargs):
        return Response([{
            'type': s[0],
            'display_name': s[1]
        } for s in SITE_SETTINGS_CHOICES])


class SiteSettingsDetailView(generics.RetrieveUpdateAPIView):
    permission_classes = (IsAuthenticated, IsAdmin,)
    lookup_field = 'type'
    slug_field = 'type'
    slug_url_kwarg = 'type'
    query_pk_and_slug = True
    queryset = SiteSettings.objects.all()
    serializer_class = SiteSettingsSerializer
