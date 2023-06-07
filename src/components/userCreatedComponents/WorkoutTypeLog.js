import { View, StyleSheet, FlatList, Text } from 'react-native';
import React from 'react';

import WorkoutType from './WorkoutType';

const WorkoutTypeLog = ( { GlobalState} ) => { 

    const { workoutDayLibrary, setWorkoutDayLibrary } = GlobalState;

    const renderItem = ({ item }) => {
        return <WorkoutType workoutType={item.workoutType}/>;
    };


    return (
        <View style={styles.container}> 
            {
                workoutDayLibrary.length == 0 ? (
                    <Text>No saved workout days yet!</Text>
                ) : (
                    <FlatList 
                        style={styles.listContainer}
                        data={workoutDayLibrary}
                        renderItem={renderItem}
                        keyExtractor={(item, index) => index.toString()}
                    />
                )
            }           
            
        </View>
    )
}

const styles=StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
        borderColor: 'pink',
        borderWidth: 3,
        height: '100%',

    },
    listContainer: {
        width: '100%',
    }
});


export default WorkoutTypeLog;