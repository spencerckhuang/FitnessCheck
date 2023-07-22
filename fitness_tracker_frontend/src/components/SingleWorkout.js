import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// props: id, date, handleFunc, List of exercises, Notes
const SingleWorkout = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => {props.handleFunc}}>
            <Text style={styles.text}>{props.date}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 22,
        fontWeight: '400',
    }
});

export default SingleWorkout;