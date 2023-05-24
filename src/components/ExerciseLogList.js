import { View, ScrollView, Text, StyleSheet } from 'react-native';
import React from 'react';

import LoggedExercise from '../components/LoggedExercise';

const ExerciseLogList = () => { 
    return (
        <ScrollView contentContainerStyle={styles.logListContainer} style={styles.logListStyle}>
            <Text>ExerciseLogList</Text>
            <LoggedExercise />
        </ScrollView>
    )
}

const styles=StyleSheet.create({
    logListContainer: {
        borderWidth: 3,
        borderColor: 'pink',
        alignItems: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flex: 1,
    }, 
    logListStyle: {
        width: '95%',  
    }
});


export default ExerciseLogList;