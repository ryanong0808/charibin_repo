from rest_framework.views import APIView
from rest_framework.response import Response

from common.constants import COUNTRY_CHOICES
from site_settings.models import SiteSettings
from site_settings.types import CATEGORIES_MENU_ITEMS

class CountriesView(APIView):
    def get(self, *args, **kwargs):
        res = [{
           "code": c[0],
           "name": c[1]
        } for c in COUNTRY_CHOICES]
        return Response(res)

class CategoriesMenuItemsView(APIView):
    permission_classes=[]
    def get(self, *args, **kwargs):
        setting, created = SiteSettings.objects.get_or_create(type=CATEGORIES_MENU_ITEMS)
        return Response(setting.value)
