import { View, StyleSheet } from 'react-native';
import React from 'react';

import ExerciseType from './ExerciseType';

const ExerciseTypeLog = ( { GlobalState } ) => { 

    const { workoutDayLibrary, setWorkoutDayLibrary } = GlobalState;

    return (
        <View>
            <ExerciseType GlobalState={GlobalState} />
        </View>
    )
}

const styles=StyleSheet.create({

});


export default ExerciseTypeLog;