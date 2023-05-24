import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../components/Header';
import Footer from '../components/Footer';

const WorkoutTracker = ({ navigation, props }) => {


    return (
        <View style={styles.screen}>
            <Header screenName="Tracker"/>
            
            <View style={styles.body}>
                <Text style={ {fontSize: 30, fontWeight: '600'}}>Tracker</Text>
            </View>

            <View>
                <Text>Day of workout: {props.date}</Text>
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
        flex: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 1
    }

})

export default WorkoutTracker;