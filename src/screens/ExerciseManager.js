import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

import WorkoutTypeLog from '../components/userCreatedComponents/WorkoutTypeLog';
import ExerciseTypeLog from '../components/userCreatedComponents/ExerciseTypeLog';

const ExerciseManager = ({ navigation, GlobalState }) => {

    return (
        <View style={styles.screen}>
            <Header screenName="Chosen Day"/>
            
            <View style={styles.body}>
                
                <View style={styles.workoutDayManager}>
                    <Text>Area for creating 'workout days'</Text>
                    <WorkoutTypeLog GlobalState={GlobalState} />
                </View>

                <View style={styles.exerciseManager}>
                    <Text>Area for creating 'exercises'</Text>
                    <ExerciseTypeLog GlobalState={GlobalState} />
                </View>


            </View>

            <Footer navigation={navigation}/>
        </View>
        
    )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    body: {
        flex: 13,       // in order for header/footer to have constant height, body must be flex 13
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1
    },

    workoutDayManager: {
        flex: 5,
        borderWidth: 3,
        borderColor: 'purple',
        width: '95%',
        borderRadius: 10,
        marginTop: 10,
        marginBottom: 5,
    },

    exerciseManager: {
        flex: 5,
        borderWidth: 3,
        borderColor: 'green',
        width: '95%',
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 10,
    }
    
})



export default ExerciseManager;