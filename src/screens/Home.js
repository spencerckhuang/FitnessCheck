import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList, ScrollView } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';
import WorkoutLog from '../components/WorkoutLog';
import SingleWorkout from '../components/SingleWorkout';

const name = "Spencer"; // temporary

const Home = ({ navigation, GlobalState }) => {

    const { exerciseName, setExerciseName, workoutLog } = GlobalState;

    // each 'item' is an individual workout
    const renderItem = ({item}) => {
        if (item && item.id) {
            return (
                <SingleWorkout id={item.id} date={item.date} handleFunc={handleChosenWorkout} />
            )
        } else {
            return (
                <Text>Nothing to display</Text>
            )
        }
        
    }

    const handleChosenWorkout = (item) => {
        setChosenWorkout(item);
        navigation.navigate('ChosenDay', {item: item});
    }

    


    return (
        <View style={styles.screen}>
            <Header screenName="Home"/>

            <View style={styles.welcome}>
                <Text style={styles.welcomeText}>Welcome back {name}! </Text>
            </View>
            
            <View style={styles.body}>        

                <Text style={styles.listHeader}>Your last workout was on (insert date!)</Text>

                <FlatList
                    style={styles.list}
                    data={workoutLog}
                    renderItem={renderItem}
                    //keyExtractor={item => item.id}
                >
                </FlatList>

                <View style={styles.userEntrySpace}>
                    <TouchableOpacity
                        onPress={() => {navigation.navigate("WorkoutTracker")}}
                    >
                        <Text>Start New Workout</Text>
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
    // in order for header/footer to have constant height, body must be flex 13
    welcome: {
        flex: 1,
        paddingTop: 20,
        paddingLeft: 20,
        paddingBottom: 0,
        paddingRight: 20,
        backgroundColor: '#f2f2f2',
        
        borderWidth: 3,
        borderColor: 'green'
    }, 
    welcomeText: {
        fontSize: 25,
        fontWeight: '400',
        borderWidth: 3,
        borderColor: 'blue',
        padding: 5,
    }, 
    body: {
        flex: 12,
        backgroundColor: '#f2f2f2',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: 'red',
    },
    footer: {
        flex: 1
    },
    listHeader: {
        fontSize: 20,
        fontStyle: 'italic',
        paddingBottom: 5,
    }, 
    list: {
        padding: 10,
        borderWidth: 3,
        borderColor: 'purple',
        width: '100%',
    }, 
    task: {
        backgroundColor: 'white',
        padding: 10,
        margin: 10,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
    },

    userEntrySpace: {
        borderWidth: 3,
        borderColor: 'pink',
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    }

})



export default Home;