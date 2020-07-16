from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, JsonResponse
from django.conf import settings

from paypalcheckoutsdk.orders import OrdersCreateRequest
from paypalcheckoutsdk.orders import OrdersCaptureRequest
from paypalcheckoutsdk.core import PayPalHttpClient, SandboxEnvironment

from .models import Course,Order
def index(request):
    courses = Course.objects.all()
    return render(request, 'index.html', {'courses':courses})

def pay(request, pk):
    client_id = settings.PAYPAL_CLIENT_ID
    course = get_object_or_404(Course, pk=pk)
    return render(request, 'pay.html', {'course':course, 'client_id':client_id })
def create(request):
    environment = SandboxEnvironment(client_id=settings.PAYPAL_CLIENT_ID, client_secret=settings.PAYPAL_SECRET_ID)
    client = PayPalHttpClient(environment)

    create_order = OrdersCreateRequest()

    #order            
    create_order.request_body (
        {
            "intent": "CAPTURE",
            "purchase_units": [
                {
                    "amount": {
                        "currency_code": "USD",
                        "value": order.get_total_price_dollar(),
                        "breakdown": {
                            "item_total": {
                                "currency_code": "USD",
                                "value":  order.get_total_price_dollar()
                            }
                            },
                        },                               
                    
                    
                }
            ]
        }
    )
    return JsonResponse(data)

def capture(request,order_id,id):
    data= {}
    return JsonResponse(data)

def getClientId(request):
    if request.method == "GET":        
        return JsonResponse({'client_id':  settings.PAYPAL_CLIENT_ID})