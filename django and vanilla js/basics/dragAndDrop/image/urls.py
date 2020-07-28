from django.urls import path
from . import views
urlpatterns = [
    path('', views.image, name='image')
]
