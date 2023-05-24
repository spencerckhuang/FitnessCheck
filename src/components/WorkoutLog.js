import { View, Text, FlatList } from 'react-native';
import React from 'react';

import SingleWorkout from '../components/SingleWorkout';

const WorkoutLog = () => { 
    return (
        <View>
            <Text>WorkoutLog</Text>

            {/* flatlist takes: data, renderItem, keyExtractor */}
            <FlatList>
                
                <SingleWorkout id={1} Date={new Date()} />
            </FlatList> 
        </View>
    )
}

export default WorkoutLog;