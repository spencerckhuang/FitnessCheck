import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkoutTracker = ({ navigation, props }) => {

    const [isVisible, setIsVisible] = useState(false);

    const [exerciseName, setExerciseName] = useState('');
    const [weight, setWeight] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');

    const handlePress = () => {  // handle press of add new exercise button
        setIsVisible(true);
    };

    const handleSubmit = () => { // handle submit after user enters data
        // TODO
    };


    return (
        <View style={styles.screen}>
            <Header screenName="Tracker"/>
            
            <View style={styles.body}>
                <Text style={ {fontSize: 30, fontWeight: '600'}}>Tracker</Text>
                
                <TouchableOpacity
                    onPress={handlePress}
                >
                    <Text>Add new exercise</Text>
                </TouchableOpacity>

                {isVisible && (
                    <View styles={styles.userInputSection}>
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
                            onPress={handleSubmit}
                        >
                            <Text>Submit</Text>
                        </TouchableOpacity>
                    
                    </View>
                )}

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

        borderWidth: 3,
        borderColor: 'red',
    },
    footer: {
        flex: 1
    }

})

export default WorkoutTracker;