import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const LoggedExercise = () => { 
    return (
        <View style={styles.logListContainer}>
            { /* <Text>LoggedExercise</Text> */ }
            <View style={styles.exerciseNameContainer}>
                <Text style={styles.exerciseNameText}>Back Squat</Text>
            </View>

            <View style={styles.exerciseDataContainer}>
                <Text style={styles.exerciseDataText}>245lb, 3 sets: 8, 8, 7</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    logListContainer: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: '#eaeaea',
        width: '95%',  
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    },
    exerciseNameContainer: {
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    exerciseNameText: {
        fontSize: 20,
        fontWeight: '600',
        paddingLeft: 10,
    },
    exerciseDataContainer: {
        alignItems: 'center'
    },
    exerciseDataText: {
        fontSize: 15,
        fontWeight: '400',
    }
});


export default LoggedExercise;