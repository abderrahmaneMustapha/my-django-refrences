from django import form
from .models import ImageModel

class ImageForm(forms.Form):
    class Meta:
        model = ImageModel

