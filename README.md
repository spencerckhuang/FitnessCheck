# FitnessCheck
Welcome to my FitnessCheck personal project! This is my first attempt at developing a mobile app. Through development, I aim to 
develop my JavaScript, React, and general software development skills. 

Fitness tracker apps are not a new phenomena, but I decided to keep the aim of my app simple as to not overwhelm myself while 
learning JS/React. The purpose of this app is to allow users to keep precise records of the exercises they perform in the gym, 
allowing for a maximum level of flexibility, such as in what workouts they choose to record, or in noting missed reps. A minimum 
viable product would include extremely basic features: the ability to start a new workout, record the sets/reps of individual exercises, 
see past training data. Some stretch goals include designing a UI that would allow for note-taking, supporting the uploading of video 
footage associated with certain sets/reps (common practice with more common, technique-demanding lifts), and more advanced data 
visualization features such as being able to display a line graph of a certain exercise over a selected period of time.

Please reach out to shuan126@jh.edu for any inquiries!

## Most recent developments

### 5/29:
Spent a lot of time on the WorkoutTracker.
* Added functionality to the "Add new exercise" button. Made it possible to store
saved workouts to a local list of Objects. Was then able to render that list into LoggedExercise
components.
* Took care of some smaller stylistic details, such as clearing the TextInputs after submitting an exericse.
* Next step is probably to figure out how to use a database to save whole "workouts". Planning on using Firebase. This is a pretty big step though...
* While I'm not doing that, I may work on input filtration for the "add new exercise" feature

### 5/24:
I started this project a few days ago but uploaded it to GH for the first time today. I have so far continued working on the general layout 
of the application, adding necessary screens, views, and buttons.
* Added WorkoutTracker screen. This is the screen that users would see during their workout to input data about exercise/weight/sets/reps.
* Added ExerciseLogList and LoggedExercise components. These are components that the user would see while completing a workout. They are meant to show the user what exercises they have already 
logged during the session.