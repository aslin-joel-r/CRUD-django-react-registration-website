# Generated by Django 5.0.4 on 2024-04-09 16:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('crud_app', '0002_rename_phoneno_register_phone_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='register',
            name='comments',
            field=models.TextField(blank=True, max_length=1000, null=True),
        ),
        migrations.AlterField(
            model_name='register',
            name='email',
            field=models.EmailField(blank=True, max_length=254, null=True),
        ),
    ]