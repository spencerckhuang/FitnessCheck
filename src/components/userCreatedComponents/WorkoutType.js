import { View, StyleSheet, Text } from 'react-native';
import React from 'react';

const WorkoutType = ( { workoutType } ) => { 

    return (
        <View style={styles.container}>
            <Text style={styles.containerText}>{workoutType}</Text>
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 10,
        width: "100%",
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerText: {
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    }
});


export default WorkoutType;