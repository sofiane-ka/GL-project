from rest_framework import serializers
from blog.models import Announcement
# from django.contrib.auth.models import User


class AnnouncementSerialiserShow(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'


class AnnouncementSerialiser(serializers.ModelSerializer):

    class Meta:
        model = Announcement
        fields = ('category', 'theme', 'modality', 'description',
                  'rate', 'wilaya', 'commune', 'adresse', 'photo')
