import React from 'react';
import {Button} from 'react-native';

const addButton = (props) => {
    return (
        <Button 
        style={styles.addButton}
        onPress={props.onAddName} 
        title="Add Name"
        />
    )
};

const styles = {
    addButton: {
        // justifyContent: 'center',
        width: "30%",
        // backgroundColor: 'green'
    },
}
export default addButton;
