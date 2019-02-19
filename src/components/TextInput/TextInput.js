import React from 'react';
import {TextInput} from 'react-native'

const textInput = (props) => {
    return (
        <TextInput 
        style={styles.input}
        value={props.val}
        onChangeText={props.change}
        placeholder="Enter your name here.."
        />
    )
};

const styles = {
    input: {
        borderBottomColor: '#000000',
        // padding: 10,
        borderBottomWidth: 1,
        width: "70%",
        // marginRight: 10
    },
}
export default textInput;
