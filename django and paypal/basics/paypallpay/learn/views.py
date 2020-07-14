from django.shortcuts import render
from django.http import HttpResponse, JsonResponse


def index(request):
    return render(request, 'index.html', {})

def create(request):
    data = {}
    return JsonResponse(data)

def capture(request):
    data= {}
    return JsonResponse(data)
