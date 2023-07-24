from django.db import models

class Workout(models.Model):
    date = models.DateField()
    workoutId = models.AutoField(primary_key=True)

    def __str__(self):
        return f"Workout {self.workoutId} - {self.date}"
    
    def create(self, validated_data):
        exercises_data = validated_data.pop('exerciseLog', [])
        workout = Workout.objects.create(**validated_data)

        for exercise_data in exercises_data:
            Exercise.objects.create(workout=workout, **exercise_data)

        return workout

class Exercise(models.Model):
    workout = models.ForeignKey(Workout, related_name='exerciseLog', on_delete=models.CASCADE)
    exerciseName = models.CharField(max_length=200)
    weight = models.FloatField()
    units = models.CharField(max_length=10)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()

    def __str__(self):
        return self.exerciseName