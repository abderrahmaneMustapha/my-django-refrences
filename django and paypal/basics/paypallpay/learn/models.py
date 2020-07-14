from django.db import models

# Create your models here.
class Course(models.Model):
    name = models.CharField(("course name"), max_length=50)
    description = models.TextField(("course description"), max_length=300)
    price =  models.FloatField(("course price"))


class Order(models.Model):
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    user_name = models.CharField(("username "), max_length=50)
    adress = models.CharField(("user adress"), max_length=50)


