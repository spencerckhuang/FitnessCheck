import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import LoggedWorkout from '../components/LoggedWorkout';

const WorkoutLogList = ( { navigation, GlobalState } ) => { 
    const { workoutLog } = GlobalState;

    const renderItem = ({ item }) => {
        // console.log("Rendering item!"); 
        if (item) {
            return <LoggedWorkout navigation={navigation} workoutData={item} GlobalState={GlobalState}/>;
        } else {
            return <Text>Nothing to see here!</Text>
        }
        
    };

    return (
        <View style={styles.container}>
            <FlatList
            style={styles.logListContainer}
            data={workoutLog}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
    }, 
    logListContainer: {
        borderWidth: 3,
        borderColor: 'purple',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    }
});


export default WorkoutLogList;