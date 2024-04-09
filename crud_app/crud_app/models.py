#models.py

from django.db import models

class Register(models.Model):
    username=models.TextField(max_length=100)
    email=models.EmailField(max_length=100)
    phone=models.PositiveIntegerField()
    role=models.TextField()
    comments=models.TextField(max_length=1000)
    celebrities=models.TextField()
