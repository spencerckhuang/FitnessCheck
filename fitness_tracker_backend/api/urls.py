from django.urls import path
from .views import FitnessCheckAPI

urlpatterns = [
    path('api/workouts/', FitnessCheckAPI.as_view(), name="fitness-check"),
]
