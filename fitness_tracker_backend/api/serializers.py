from rest_framework import serializers
from .models import Workout, Exercise

class ExerciseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Exercise
        fields = ('id', 'exerciseName', 'weight', 'units', 'sets', 'reps')

class WorkoutSerializer(serializers.ModelSerializer):
    exerciseLog = ExerciseSerializer(many=True)

    class Meta:
        model = Workout
        fields = ('workoutId', 'date', 'exerciseLog')

    def create(self, validated_data):
        exercises_data = validated_data.pop('exerciseLog', [])
        workout = Workout.objects.create(**validated_data)

        for exercise_data in exercises_data:
            Exercise.objects.create(workout=workout, **exercise_data)

        return workout
