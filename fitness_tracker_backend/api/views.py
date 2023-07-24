from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status
from .models import Workout, Exercise
from .serializers import WorkoutSerializer, ExerciseSerializer

class FitnessCheckAPI(APIView):
    def get(self, request):
        person = {'name':'Dennis', 'age':28}
        return Response(person, status=200)
    
    def post(self, request, format=None):
        workout_data = request.data
        exercises_data = workout_data.get('exerciseLog', []) # extract exercises from request data
        

        workout_serializer = WorkoutSerializer(data=workout_data)
        if (workout_serializer.is_valid()):
            workout_instance = workout_serializer.save()
        else:
            print("BAD WORKOUT REQUEST")
            print(workout_serializer.errors)
            print(workout_data)
            return Response(workout_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        
        
        
        # Create associated Exercise instances
        for exercise_data in exercises_data:
            exercise_data['workout'] = workout_instance.id
            exercise_serializer = ExerciseSerializer(data=exercise_data)
            if (exercise_serializer.is_valid()):
                exercise_serializer.save()
            else:
                print ("BAD EXERCISE REQUEST")
                return Response(exercise_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
        return Response(workout_serializer.data, status=status.HTTP_201_CREATED)