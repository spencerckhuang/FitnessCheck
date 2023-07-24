from django.db import models

class Workout(models.Model):
    date = models.DateTimeField()
    workoutId = models.AutoField(primary_key=True)

    def __str__(self):
        return f"Workout {self.workoutId} - {self.date}"

class Exercise(models.Model):
    workout = models.ForeignKey(Workout, related_name='exercises', on_delete=models.CASCADE)
    exerciseName = models.CharField(max_length=200)
    weight = models.FloatField()
    units = models.CharField(max_length=10)
    sets = models.PositiveIntegerField()
    reps = models.PositiveIntegerField()

    def __str__(self):
        return self.exerciseName