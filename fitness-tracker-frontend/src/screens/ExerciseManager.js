import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

import WorkoutTypeLog from '../components/userCreatedComponents/WorkoutTypeLog';
import ExerciseTypeLog from '../components/userCreatedComponents/ExerciseTypeLog';

const ExerciseManager = ({ navigation, GlobalState }) => {

    const {workoutDayLibrary, setWorkoutDayLibrary} = GlobalState;

    const [addingWorkout, setAddingWorkout] = useState(false);
    const [workoutBeingAdded, setWorkoutBeingAdded] = useState("");

    const handleAddWorkout = () => {
        setAddingWorkout(true);
    }

    const handleAddWorkoutSubmit = () => {
        if (workoutBeingAdded == "") {
            alert("Please enter a workout name!");
            return;
        } 

        setWorkoutDayLibrary([...workoutDayLibrary, {workoutType: workoutBeingAdded}]);
        setWorkoutBeingAdded("");
        setAddingWorkout(false);
    }

    return (
        <View style={styles.screen}>
            <Header screenName="Chosen Day"/>
            
            <View style={styles.body}>

                
                
                <View style={styles.workoutDayManager}>

                    <View style={styles.log}>
                        <WorkoutTypeLog GlobalState={GlobalState} />
                    </View>

                    

                    <TouchableOpacity 
                        style={styles.addButton}
                        onPress={() => {handleAddWorkout()}}
                    >
                        <Text> Add Workout </Text>
                    </TouchableOpacity>

                    {
                    addingWorkout && (
                        <View style={styles.addModal}>
                            <TextInput
                                style={styles.addModalInput}
                                onChangeText={text => setWorkoutBeingAdded(text)}
                                placeholder="Enter Workout Name"
                                value={workoutBeingAdded}
                            />

                            <TouchableOpacity
                                style={styles.addModalButton}
                                onPress={() => {handleAddWorkoutSubmit()}}
                            >
                                <Text>Submit</Text>
                            </TouchableOpacity>
                        </View>  
                    )
                }

                </View>



                <View style={styles.exerciseManager}>

                    <View style={styles.log} >
                        <ExerciseTypeLog GlobalState={GlobalState} />
                    </View>

                    

                    <TouchableOpacity style={styles.addButton}>
                        <Text> Add Exercise </Text>
                    </TouchableOpacity>

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
    },
    log: {
        flex: 8,

        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 10,
    },

    addButton: {
        borderWidth: 3,
        borderColor: 'blue',
        flex: 2,
        borderRadius: 10,
    },

    addModal: {
        borderWidth: 3,
        borderColor: 'orange',
        borderRadius: 10,

        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addModalInput: {
        borderColor: 'black',
        borderWidth: 3,
        borderRadius: 10,
        width: '70%',
        paddingLeft: 5,
    },
    addModalButton: {
        borderColor: 'yellow',
        borderWidth: 3,
        borderRadius: 10,
        width: '30%',
    }
    
})



export default ExerciseManager;