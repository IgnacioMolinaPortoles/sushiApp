import React from 'react'
import { View, StyleSheet } from 'react-native'
import BodyItem from '../SushiBody/components/BodyItem'

const SushiBody = props => {
    return (
        <View style={styles.container}>
            {props.ingredientsList.map((item, index) => {
                return (
                    <BodyItem
                        key={index}
                        onDelete={props.onDeleteIngredient}
                        itemData={item}
                    />
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3.5,
        justifyContent: "center",
        alignItems: "center"
    }
})

export default SushiBody