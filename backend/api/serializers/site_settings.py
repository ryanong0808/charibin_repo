from rest_framework import serializers
from site_settings.models import SiteSettings


class SiteSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteSettings
        fields = ('type', 'value')
        read_only_fields = ('type',)
