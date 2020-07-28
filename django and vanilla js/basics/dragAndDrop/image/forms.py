from django import forms
from .models import ImageModel

class ImageForm(forms.Form):
    image = forms.ImageField(label="drag and drop an image here")
    class Meta:
        model = ImageModel
        fields = ('image')

