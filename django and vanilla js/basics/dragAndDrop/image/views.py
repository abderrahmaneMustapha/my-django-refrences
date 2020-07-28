from django.shortcuts import render
from .forms import ImageForm
# Create your views here.

def image(request):
    form = ImageForm()
    if request.method== "POST":
        form = ImageForm(request.POST, request.FILES)
        if form.is_valide():
            form.save()
        else :
            data = {'errors': form.errors}

    return render(request, 'image/index.html', {'form':form})