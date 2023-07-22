import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

const awaitServerResponse = async () => {
    try {
        const response = await fetch('http://127.0.0.1:3000/', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        });

        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        // Handle the error appropriately or rethrow it if necessary
        throw error;
    }
}


const Footer = ({navigation}) => {
    const iconSize = 25;

    const handleHomePress = async () => {
        navigation.navigate("Home")

        try {
            const jsonObjectTest = await awaitServerResponse();
            alert(jsonObjectTest["name"]);
        } catch (error) {
            console.error("Error fetching data, ", error);
        }
    }



    return (
        <View style={styles.footer}>
            <TouchableOpacity
                onPress={handleHomePress}
                style={styles.iconStyle}
            >
                <EntypoIcon 
                    name="home"
                    size={iconSize}
                    color="#ffffff"  
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {navigation.navigate("ExerciseManager")}}
                style={styles.iconStyle}
            >
                <FontAwesomeIcon 
                    name="tasks"
                    size={iconSize}
                    color="#ffffff"
                />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {navigation.navigate("ExerciseManager")}}
                style={styles.iconStyle}
            >
                <FeatherIcon
                    name="settings"
                    size={iconSize}
                    color="#ffffff"
                />
            </TouchableOpacity>
    
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flexDirection: 'row',
        flex: 1.25,
        width: '100%',              // this is needed since flex is top-bottom
                                    // without it, it wont display at all
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#00a8e8',
        shadowColor: "#000",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elevation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    },
    iconStyle: {
        width: '33%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    }
})

export default Footer;