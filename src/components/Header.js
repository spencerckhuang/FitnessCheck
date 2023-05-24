import { StyleSheet, View, Text } from 'react-native';
import Constants from 'expo-constants';

export default function Header(props) {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>{props.screenName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.60,
        width: '100%',              // this is needed since flex is top-bottom
                                    // without it, it wont display at all
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00a8e8',
        paddingTop: Constants.statusBarHeight, // differs depending on device used, thats why Constants used
        paddingBottom: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
        zIndex: 5,
    },
    text: {
        fontSize: 22,
        fontWeight: '600',
        color: '#ffffff',
    }
})