from django.shortcuts import render

# Create your views here.
def dateTime(request):
    return render(request,'DigitalClock.html')