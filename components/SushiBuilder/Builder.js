import React from 'react'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import BuildItem from './components/BuildItem'

const Builder = props => {
    return (
        <View style={styles.container}>
            <Text>Total: ${props.total}</Text>
            <Text style={styles.builderTitle}>Ingredientes</Text>
            <FlatList
                data={props.ingredients}
                horizontal={true}
                renderItem={
                    itemData =>
                        <BuildItem
                            onAdd={props.onAddIngredient}
                            item={itemData.item}
                        />
                }
                keyExtractor={(itemData, index) => String(index)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginBottom: 20
    },
    builderTitle: {
        fontSize: 20,
        fontWeight: "700",
        marginBottom: "1%"
    }
})

export default Builder
