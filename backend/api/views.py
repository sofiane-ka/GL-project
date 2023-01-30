from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import AnnouncementSerialiser, AnnouncementSerialiserShow
from blog.models import Announcement
import requests
from django.shortcuts import render
from django.shortcuts import render
from django.http import Http404
from rest_framework import generics, status
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters


# Get All the announcement

class GETViews(APIView):

    def get(self, request, format=None):

        all_announcements = Announcement.objects.all()
        data = AnnouncementSerialiserShow(all_announcements, many=True)
        return Response(data.data)


class GETViewsOfUser(generics.ListAPIView):
    serializer_class = AnnouncementSerialiserShow

    def get_queryset(self):

        user = self.request.user
        print(self.request.user.email)
        return Announcement.objects.filter(announcer=user)
# Searching in theme and description
# http://127.0.0.1:8000/data/test/ser?searching=Anglais


class AnnouncementSearching(generics.ListAPIView):
    serializer_class = AnnouncementSerialiserShow

    def get_queryset(self):
        searching = self.request.query_params.get('searching')
        if searching is not None:
            return Announcement.objects.filter(title__contains=searching) \
                | Announcement.objects.filter(description__contains=searching)


# Create an announcement


class PostViews(APIView):

    def post(self, request, format=None):

        serializer = AnnouncementSerialiser(data=request.data)

        if serializer.is_valid():
            announcer = self.request.user
            category = serializer.data.get('category')
            modality = serializer.data.get('modality')
            theme = serializer.data.get('theme')
            description = serializer.data.get('description')
            rate = serializer.data.get('rate')
            wilaya = serializer.data.get('wilaya')
            commune = serializer.data.get('commune')
            adresse = serializer.data.get('adresse')
            photo = serializer.data.get('photo')

            announce = Announcement(category=category, theme=theme, modality=modality,
                                    description=description, rate=rate, announcer=announcer, wilaya=wilaya, commune=commune,
                                    adresse=adresse, photo=photo)

            announce.save()

            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Get one announcement


class DetailViews(APIView):

    def get_object(self, pk):
        try:
            return Announcement.objects.get(pk=pk)
        except Announcement.DoesNotExist:
            raise Http404

    def get(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AnnouncementSerialiserShow(snippet)
        return Response(serializer.data)

# update an announcement


class UpdateViews(APIView):

    def get_object(self, pk):
        try:
            return Announcement.objects.get(pk=pk)
        except Announcement.DoesNotExist:
            raise Http404

    def put(self, request, pk, format=None):
        snippet = self.get_object(pk)
        serializer = AnnouncementSerialiser(snippet, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# delete an announcement


class DeleteViews(APIView):

    def get_object(self, pk):
        try:
            return Announcement.objects.get(pk=pk)
        except Announcement.DoesNotExist:
            raise Http404

    def delete(self, request, pk, format=None):
        snippet = self.get_object(pk)
        snippet.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
