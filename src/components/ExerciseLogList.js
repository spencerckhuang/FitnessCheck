import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import LoggedExercise from '../components/LoggedExercise';

const ExerciseLogList = ( {exerciseLog} ) => { 


    const renderItem = ({ item }) => {
        // console.log("Rendering item!"); 
        return <LoggedExercise exercise={item} />;
    };

    return (
        <FlatList 
            style={styles.logListContainer}
            data={exerciseLog}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
        />
    );

}

const styles=StyleSheet.create({
    logListContainer: {
        borderWidth: 3,
        borderColor: 'pink',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
        flex: 1,
        width: "95%",
    }
});


export default ExerciseLogList;