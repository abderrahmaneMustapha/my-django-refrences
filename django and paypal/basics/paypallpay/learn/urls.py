from django.urls import path
from .views import *
urlpatterns = [
    path('', index, name="index"),
    path('paypal/create/', create, name="paypal-create"),
    path('paypal/capture/', capture, name="paypal-capture")
]
