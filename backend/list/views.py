from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ListSerializer
from .models import List

# Create your views here.

class ListView(viewsets.ModelViewSet):
    serializer_class = ListSerializer
    queryset = List.objects.all()