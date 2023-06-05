import { View, StyleSheet } from 'react-native';
import React from 'react';

import WorkoutType from './WorkoutType';

const WorkoutTypeLog = ( { GlobalState} ) => { 

    const { workoutDayLibrary, setWorkoutDayLibrary } = GlobalState;

    return (
        <View>
            <WorkoutType GlobalState={GlobalState}/>
        </View>
    )
}

const styles=StyleSheet.create({

});


export default WorkoutTypeLog;