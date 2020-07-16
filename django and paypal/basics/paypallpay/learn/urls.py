from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name="index"),
    path('paypal/pay/<pk>/', pay, name="pay"),
    path('paypal/create/', create, name="paypal-create"),
    path('paypal/capture/', capture, name="paypal-capture"),
     path('paypal/client-id/', getClientId , name="client-id")
]
