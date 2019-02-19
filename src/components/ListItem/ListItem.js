import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

const listItem = (props) => {
    return (
        <View style={styles.container}>
            <Text>{props.person}</Text>
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width: "95%",
        alignItems: 'center',
        backgroundColor: "#eee",
        padding: 10,
        marginBottom: 5
    }
})

export default listItem;

