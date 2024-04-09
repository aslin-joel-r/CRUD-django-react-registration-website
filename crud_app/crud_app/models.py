#models.py

from django.db import models

class Register(models.Model):
    username = models.TextField(max_length=100)
    email = models.EmailField(null=True, blank=True)  # Allow null values
    phone = models.PositiveIntegerField()
    role = models.TextField()
    comments = models.TextField(null=True, blank=True, max_length=1000)  # Allow null values
    celebrities = models.TextField()