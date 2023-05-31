import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

import ExerciseLogList from '../components/ExerciseLogList';

const WorkoutTracker = ({ navigation, GlobalState }) => {
    const { workoutLog, setWorkoutLog, currentWorkoutID, setCurrentWorkoutID } = GlobalState;

    const [isVisible, setIsVisible] = useState(false);
    const [exerciseLog, setExerciseLog] = useState([]); // array of objects, each object is an exercise
    const [exerciseName, setExerciseName] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const handlePress = () => {  // handle press of add new exercise button
        setIsVisible(isVisible ? false : true);
    };

    const handlePressEndWorkout = () => {  // handle press of end workout button
        if (exerciseLog.length === 0) {
            alert("You must add at least one exercise to your workout!");
            return;
        }
        
        const newWorkout = {
            date: new Date().toLocaleDateString(),
            id: currentWorkoutID,
            exercises: exerciseLog,
        };
        setCurrentWorkoutID(prevID => prevID + 1);
        setWorkoutLog([newWorkout, ...workoutLog]);
        navigation.navigate("Home");
    };

    const handleSubmit = () => { // handle submit after user enters data
        const newExercise = {
            exerciseName: exerciseName,
            weight: weight,
            sets: sets,
            reps: reps,
          };
        setExerciseLog([...exerciseLog, newExercise]);
        setExerciseName("");
        setWeight("");
        setSets("");
        setReps("");
        setIsVisible(false);
    };


    return (
        <View style={styles.screen}>
            <Header screenName="Tracker"/>
            
            <View style={styles.body}>

                <TouchableOpacity
                    style = {styles.addExerciseButton}
                    onPress={handlePress}
                >
                    <Text style={styles.addExerciseButtonText}>Add new exercise</Text>
                </TouchableOpacity>

                {isVisible && (
                    <View style={styles.userInputSection}>
                        {/*  Some of these are def not right, maybe make new hooks in here? */}
                        <TextInput
                            style={styles.userInput}
                            placeholder="Enter exercise name"
                            onChangeText={text => setExerciseName(text)}
                            value={exerciseName}
                        />

                        <TextInput
                            style={styles.userInput}
                            placeholder="Enter weight"
                            onChangeText={text => setWeight(text)}
                            value={weight}
                        />

                        <TextInput
                            style={styles.userInput}
                            placeholder="Enter sets"
                            onChangeText={text => setSets(text)}
                            value={sets}
                        />

                        <TextInput
                            style={styles.userInput}
                            placeholder="Enter reps"
                            onChangeText={text => setReps(text)}
                            value={reps}
                        />

                        <TouchableOpacity
                            style={styles.submitButton}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.submitButtonText}>Submit</Text>
                        </TouchableOpacity>
                    
                    </View>
                )}

                <ExerciseLogList exerciseLog={exerciseLog}/>

                <TouchableOpacity
                    style = {styles.endWorkoutButton}
                    onPress={handlePressEndWorkout}
                >
                    <Text style={styles.endWorkoutButtonText}>End workout</Text>
                </TouchableOpacity>



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
        // justifyContent: 'center',
        alignItems: 'center',

        borderWidth: 3,
        borderColor: 'red',

        paddingTop: 10,
    },
    addExerciseButton: {
        borderWidth: 3,
        borderColor: 'purple',

        margin: 5, 
        padding: 10,
        width: '95%',

        alignItems: 'center',

        backgroundColor: '#eaeaea',

        borderRadius: 10,
    },
    addExerciseButtonText:{
        fontSize: 20,
        fontWeight: '500',
    },  
    endWorkoutButton: {
        borderWidth: 3,
        borderColor: 'purple',

        margin: 5, 
        marginBottom: 10,
        padding: 10,
        width: '95%',

        alignItems: 'center',

        backgroundColor: '#eaeaea',

        borderRadius: 10,
    },
    endWorkoutButtonText: {
        fontSize: 20,
        fontWeight: '500',
    },
    userInputSection: {
        borderWidth: 3,
        borderColor: 'blue',
        marginTop: 5,
        borderRadius: 10,
        width: '95%',
        alignItems: 'center',
        justifyContent: 'space-between',

    },
    userInput: {
        borderWidth: 3,
        borderColor: 'green',
        paddingVertical: 5,
        paddingLeft: 10,
        width: '90%',
        height: 50,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
    },
    submitButton: {
        borderWidth: 3,
        borderColor: 'green',
        paddingVertical: 5,
        width: '90%',
        height: 50,
        marginBottom: 10,
        marginTop: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submitButtonText: {
        fontSize: 20,
        fontWeight: '500',
    }

})

export default WorkoutTracker;