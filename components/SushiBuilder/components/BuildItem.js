import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native'

const BuildItem = props => {
    return (
        <TouchableHighlight
            onPress={() => props.onAdd(props.item)}
            style={styles.itemContainer}
            activeOpacity={0.8}
            underlayColor="#DDDDDD"
        >
            <Text>
                {`${props.item.name} \nPrecio: $${props.item.price}`}
            </Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        borderColor: "black",
        borderWidth: 1,
        borderRadius:8,
        padding: 20,
        marginLeft: 10,
        justifyContent: "center",
    }
})

export default BuildItem
