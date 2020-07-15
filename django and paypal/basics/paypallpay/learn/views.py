from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.conf import settings
from .models import Course,Order
def index(request):
    courses = Course.objects.all()
    return render(request, 'index.html', {'courses':courses})

def pay(request, pk):
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'pay.html', {'course':course})
def create(request):
    data = {}
    return JsonResponse(data)

def capture(request):
    data= {}
    return JsonResponse(data)

def getClientId(request):
   return JsonResponse({'client_id':  settings.PAYPAL_CLIENT_ID})