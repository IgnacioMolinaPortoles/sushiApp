import React from 'react'
import { Text, StyleSheet, TouchableHighlight } from 'react-native'

const BodyItem = props => {
    return (
        <TouchableHighlight
            onPress={() => props.onDelete(props.itemData)}
            style={styles.itemContainer}
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
        >
            <Text>{props.itemData.name}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderColor: "red",
        borderWidth: 1,
        borderRadius:8,
        padding: 20,
        marginRight: 10,
        justifyContent: "center",
        height: 30,
        marginBottom:10
    }
})

export default BodyItem
