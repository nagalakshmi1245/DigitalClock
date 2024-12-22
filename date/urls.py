from django.urls import path
from .views import dateTime

app_name='date'

urlpatterns=[
    path('',dateTime,name='datetime')
]