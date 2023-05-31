import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

const TypeOfWorkout = ({ navigation, props }) => {


    return (
        <View style={styles.screen}>
            <Header screenName="Chosen Day"/>
            
            <View style={styles.body}>
                <Text style={ {fontSize: 30, fontWeight: '600'}}>Choosing type of workout here!</Text>
                <Text style={ {fontSize: 15, fontWeight: '200'}}>(For now, just click this to go to next screen:)</Text>
                <TouchableOpacity
                    onPress={() => {navigation.navigate("WorkoutTracker")}}
                    styles={styles.tempButton}
                >
                    <Text>Click me!</Text>
                </TouchableOpacity>
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
        flex: 13,       // in order for header/footer to have constant height, body must be flex 13
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1
    },
    tempButton: {
        borderColor: 'black',
        borderWidth: 3,
        backgroundColor: 'red',
        width: 100,
        height: 100,
    }


})



export default TypeOfWorkout;