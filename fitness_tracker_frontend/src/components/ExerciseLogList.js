import { View, ScrollView, Text, StyleSheet, FlatList } from 'react-native';
import React from 'react';

import LoggedExercise from '../components/LoggedExercise';

const ExerciseLogList = ( {exerciseLog, handleEdit} ) => { 


    const renderItem = ({ item }) => {
        // console.log("Rendering item!"); 
        return <LoggedExercise exercise={item} handleEdit={handleEdit}/>;
    };

    return (
        <View style={styles.container}>
          <FlatList
            style={styles.logListContainer}
            data={exerciseLog}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    );

}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        width: "95%",
    }, 
    logListContainer: {
        borderWidth: 3,
        borderColor: 'pink',
        borderRadius: 10,
        padding: 10,
        marginVertical: 10,
    }
});


export default ExerciseLogList;