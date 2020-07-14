from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from django.conf import settings

def index(request):
    return render(request, 'index.html', {})

def create(request):
    data = {}
    return JsonResponse(data)

def capture(request):
    data= {}
    return JsonResponse(data)

def getClientId(request):
   return JsonResponse({'client_id':  settings.PAYPAL_CLIENT_ID})