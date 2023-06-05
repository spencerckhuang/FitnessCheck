import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const ExerciseType = ( {GlobalState} ) => { 

    return (
        <View>
            <Text>This would be an exercise</Text>
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


export default ExerciseType;