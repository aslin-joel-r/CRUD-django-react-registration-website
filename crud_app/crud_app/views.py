# view.py

from django.shortcuts import redirect, render
from .forms import RegisterForm
from .models import Register

def register(request):
    if request.method == 'POST':
        print(request.POST)
        form = RegisterForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('read')  # Redirect to success page
        else:
            print(form.errors)
    else:
        form = RegisterForm()  # Initialize form instance when method is not POST

    return render(request, 'register.html', {'form': form})  # Pass form instance to template context

def read(request):
    registrations=Register.objects.all()
    return render(request,'read.html',{'registrations': registrations})