# crud_app/templatetags/templatetags.py

from django import template

register = template.Library()


@register.filter(name='split')
def split(value, delimiter=','):
    # Remove square brackets and single quotes from the string
    value = value.strip('[]').replace("'", "")
    return value.split(delimiter)