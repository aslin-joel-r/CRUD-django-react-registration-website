# forms.py

from django import forms
from .models import Register

class RegisterForm(forms.ModelForm):
    class Meta:
        model = Register
        fields = ['username', 'email', 'phone', 'role', 'comments', 'celebrities']
        widgets = {
            'celebrities': forms.CheckboxSelectMultiple(attrs={'required': True}),  # Make checkboxes required
        }

  
