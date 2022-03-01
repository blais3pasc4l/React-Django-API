from django.db import models

# Create your models here.

'''creando un modelo que indica como se deben definir los elementos'''

class List(models.Model):
    '''users models'''
    name = models.CharField(max_length=300, unique=True)
    direccion = models.CharField(max_length=300)
    nit = models.CharField(max_length=300, unique=True)
    tel = models.CharField(max_length=15, unique=True)
    def _str_(self):
        return self.name