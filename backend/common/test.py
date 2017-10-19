from django import test

from rest_framework.test import APIClient

from account.test.factories import AdminFactory
from account.test.factories import UserFactory


class TestCase(test.TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = UserFactory.create()
        self.client.force_authenticate(user=self.user)


class AdminTestCase(test.TestCase):
    def setUp(self):
        self.client = APIClient()
        self.user = AdminFactory.create()
        self.client.force_authenticate(user=self.user)