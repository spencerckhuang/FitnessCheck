import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import ExerciseLogList from '../components/ExerciseLogList';

const ChosenDay = ({ navigation, GlobalState }) => {
    const { chosenWorkout } = GlobalState;

    return (
        <View style={styles.screen}>
            <Header screenName="Chosen Day"/>
            
            <View style={styles.body}>
                <Text style={ {fontSize: 22, fontWeight: '400'}}>Date: {chosenWorkout.date}</Text>
                <Text style={ {fontSize: 22, fontWeight: '400'}}>ID: {chosenWorkout.id}</Text>

                <ExerciseLogList exerciseLog={chosenWorkout.exercises}/>


            </View>

            {/* <View>
                <Text>Day of workout: {props.date}</Text>
            </View> */}

            <Footer navigation={navigation}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    body: {
        borderColor: 'red',
        borderWidth: 3,
        padding: 10,

        flex: 13,       // in order for header/footer to have constant height, body must be flex 13
        alignItems: 'center',
    },
    footer: {
        flex: 1
    }

})



export default ChosenDay;