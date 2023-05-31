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

#### General To-do (updated periodically):
Logging new workout:
* Input filtration: Ensure that the user cannot input non-integer values for sets/reps
* Rep schemes: Allow user to input custom rep data for each set
* RPE: Allow user to add information about RPE for every set (i never personally keep track of this so i don't know what this should look like as of now????)
* Add lb/kg option for logging a single exercise (note that a user may measure in kilograms for a lift such as the snatch, while in pounds for a dumbbell accessory movement)
* Allow for rearranging of exercises via drag and drop (i have no idea how to do this as of now)

LoggedWorkout:
* Show more relevant data on homepage (i.e. type of workout, featured exercise)

Misc:
* Instead of typing in exercise names, the user should be able to select from a list that they create (the list would be entirely custom to the user, so it is essentially the same as letting them type it in every time. however, the purpose of a set list is to make getting data for the same exercise across multiple days possible)
* Same idea but with types of days (i.e. push, pull, legs)
* Maybe even types of types of days??? (i.e. hypertrophy, power, deload)
* Hook up workout data to cloud-based database????

## Most recent developments

### 5/30:
Working on the logging of individual day-by-day workouts (i.e. seeing a list of all your past workout sessions: the one a week ago, the one yesterday, the one you just finished today)
* Created a currentWorkoutID state that updates (incremented by 1) every time a new workout is logged
Ideas for further development:
* Re. display of workouts on homepage: Every workout should have a 'label' of sorts (i.e. push, pull, legs, etc.). This label should be displayed on the LoggedWorkout component. Additionally, the user could be able to choose a "featured exercise" every workout that would also be featured on the LoggedWorkout component. For example, in total, a user may finish a workout and see: the date, the workout ID, that the workout was a "leg day", and that the featured exercise was a 315lb one-rep-max back squat (the featured exercise would include all data from a single LoggedExercise).

### 5/29:
Spent a lot of time on the WorkoutTracker.
* Added functionality to the "Add new exercise" button. Made it possible to store
saved workouts to a local list of Objects. Was then able to render that list into LoggedExercise
components.
* Took care of some smaller stylistic details, such as clearing the TextInputs after submitting an exericse.
* Next step is probably to figure out how to use a database to save whole "workouts". Planning on using Firebase. This is a pretty big step though...
* While I'm not doing that, I may work on input filtration for the "add new exercise" feature

### 5/24:
I started this project a few days ago but uploaded it to GH for the first time today. I have so far continued working on the general layout. 
of the application, adding necessary screens, views, and buttons.
* Added WorkoutTracker screen. This is the screen that users would see during their workout to input data about exercise/weight/sets/reps.
* Added ExerciseLogList and LoggedExercise components. These are components that the user would see while completing a workout. They are meant to show the user what exercises they have already 
logged during the session.