from django.db import models
from django.contrib.postgres.fields import JSONField
from .types import SITE_SETTINGS_CHOICES


class SiteSettings(models.Model):
    type = models.CharField(choices=SITE_SETTINGS_CHOICES, unique=True, max_length=255)
    value = JSONField()

    class Meta:
        verbose_name_plural = 'SiteSettings'
