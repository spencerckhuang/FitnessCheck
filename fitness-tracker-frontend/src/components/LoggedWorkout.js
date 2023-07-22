import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';

const LoggedExercise = ( {navigation, workoutData, GlobalState} ) => { 

    const { setChosenWorkout } = GlobalState;

    const handlePress = () => {
        setChosenWorkout(workoutData);
        navigation.navigate("ChosenDay");
    };

    return (
        <View style={styles.logListContainer}>
            <TouchableOpacity
                onPress={handlePress}
            >
                <Text style={styles.workoutDateText}>{workoutData.date}</Text>
                <Text style={styles.workoutDateText}>{workoutData.id}</Text>

            </TouchableOpacity>
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
    workoutDateText: {
        fontSize: 20,
        fontWeight: '400',
    },
});


export default LoggedExercise;