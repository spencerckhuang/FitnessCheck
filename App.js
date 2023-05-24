import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native'; // what does this do? "for navigation"
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // "this is what we are using to create our navigation"
import 'react-native-gesture-handler';

import Home from './src/screens/Home';
import ChosenDay from './src/screens/ChosenDay';
import WorkoutTracker from './src/screens/WorkoutTracker'

const Stack = createNativeStackNavigator();

export default function App() {
  const [workoutLog, setWorkoutLog] = useState([]); // "this is the state that we are going to be using to store our workout list"
  const [singleWorkout, setSingleWorkout] = useState([{id: 1, lift: "Bench press", sets: 3, reps: 8}]); // "this is the state that we are going to be using to store a single workout"
  const [chosenWorkout, setChosenWorkout] = useState(null); // "this is the state that we are going to be using to store the chosen workout" 
  const [chosenLift, setChosenLift] = useState(null);

  const [exerciseName, setExerciseName] = useState(null);
  const [sets, setSets] = useState(null);
  const [reps, setReps] = useState(null);

  const GlobalState = {
    workoutLog: setWorkoutLog,
    singleWorkout: setSingleWorkout,
    chosenWorkout: setChosenWorkout,
    chosenLift: setChosenLift,
    exerciseName: setExerciseName,
    sets: setSets,
    reps: setReps
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          animation: "none"
        }}
      >


        <Stack.Screen name="Home" options = {{headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="ChosenDay" options = {{headerShown: false}}>
          {props => <ChosenDay {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="WorkoutTracker" options = {{headerShown: false}}>
          {props => <WorkoutTracker {...props} GlobalState={GlobalState} />}
        </Stack.Screen>


      </Stack.Navigator>
    </NavigationContainer>
  )
}

