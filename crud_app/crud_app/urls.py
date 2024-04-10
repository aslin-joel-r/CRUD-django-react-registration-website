#urls.py

from django.contrib import admin
from django.urls import path
from . import views
from .views import error_404

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.register, name='register'),
    path('read/', views.read, name='read'),
    path('delete/<int:record_id>/', views.delete_record, name='delete_record'),
    path('update/<int:record_id>/',views.update_record,name='update_record')
]
handler404 = 'crud_app.views.error_404'