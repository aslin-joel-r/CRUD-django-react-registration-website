# view.py

from django.shortcuts import redirect, render
from .forms import RegisterForm
from .models import Register
from django.http import JsonResponse
from django.shortcuts import get_object_or_404


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


def delete_record(request, record_id):
    registration = get_object_or_404(Register, pk=record_id)
    registration.delete()
    return JsonResponse({'message': 'Record deleted successfully'})

def update_record(request,record_id):
    record = get_object_or_404(Register, pk=record_id)

    if request.method == 'POST':
        # Populate a form with the data from the retrieved object
        form = RegisterForm(request.POST, instance=record)
        if form.is_valid():
            # Update the object with the new data
            form.save()
            # Redirect to a success page or the updated record page
            return redirect('read')
    else:
        # Populate a form with the data from the retrieved object
        form = RegisterForm(instance=record)
    return render(request,'update.html',{'user':record})
