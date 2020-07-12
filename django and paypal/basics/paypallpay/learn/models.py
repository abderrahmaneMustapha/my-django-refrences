from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(("course name"), max_length=50)
    description = models.TextField(("course description"), max_length=300)
    price =  models.FloatField(("course price"))


class Order(models.Model):
    user_name = models.CharField(_("username "), max_length=50)
    adress = models.CharField(_("user adress"), max_length=50)


