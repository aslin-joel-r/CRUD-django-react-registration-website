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

    def clean(self):
        cleaned_data = super().clean()
        celebrities = cleaned_data.get('celebrities')

        # Check if at least one checkbox is selected
        if not celebrities:
            raise forms.ValidationError("Please select at least one celebrity.")
        
        return cleaned_data
