from django.shortcuts import render
from django.http import JsonResponse
from .forms import ImageForm
from .models import ImageModel
# Create your views here.

def image(request):
    form = ImageForm()
    if request.method== "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valid():
            ImageModel.objects.create(image=form.cleaned_data.get('image'))
            return JsonResponse( {'details': "image saved  successfully"})
        else :
            data = {'details': form.errors}
            return JsonResponse(data)

    return render(request, 'image/index.html', {'form':form})