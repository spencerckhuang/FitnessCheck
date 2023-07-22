import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const LoggedExercise = ( {exercise, handleEdit} ) => { 

    return (
        <View style={styles.logListContainer}>
            <View style={styles.infoContainer}>
                <View style={styles.exerciseNameContainer}>
                    <Text style={styles.exerciseNameText}>{exercise.exerciseName}</Text>
                </View>

                <View style={styles.exerciseDataContainer}>
                    <Text style={styles.exerciseDataText}>{exercise.weight}{exercise.weightUnits}, {exercise.sets} sets of {exercise.reps} reps</Text>
                </View>
            </View>

            <AntDesignIcon 
                name="edit" 
                size={30} 
                color="black" 
                style={styles.editIcon}
                onPress={() => handleEdit(exercise)}
            />
            
        </View>
    )
}

const styles=StyleSheet.create({
    logListContainer: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: '#eaeaea',
        width: '100%',  
        justifyContent: 'center',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        flex: 9,
    },
    editIcon: {
        flex: 1,
        marginRight: 5,
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