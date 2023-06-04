import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

import EntypoIcon from 'react-native-vector-icons/Entypo';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';

const Footer = ({navigation}) => {
    const iconSize = 25;

    return (
        <View style={styles.footer}>
            <EntypoIcon 
                name="home"
                size={iconSize}
                color="#ffffff"
                onPress={() => {navigation.navigate("Home")}}
            />

            <FontAwesomeIcon 
                name="tasks"
                size={iconSize}
                color="#ffffff"
                onPress={() => {navigation.navigate("ExerciseManager")}}
            />

            <FeatherIcon
                name="settings"
                size={iconSize}
                color="#ffffff"
                onPress={() => {}}
            />
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
    }
})

export default Footer;