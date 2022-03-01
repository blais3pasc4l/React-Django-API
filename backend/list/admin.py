from django.contrib import admin
from .models import List

class ListAdmin(admin.ModelAdmin):
    list_display = ('name', 'direccion', 'nit', 'tel')

# Register your models here.

admin.site.register(List, ListAdmin)

