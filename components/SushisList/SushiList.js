import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import SushiItem from './components/SushiItem'

const SushiList = props => {
    return (
        <View style={styles.container}>
            {props.sushis.map( (item, index) => <SushiItem key={index} ingredients={item[0]} total={item[1].total} name={item[1].sushiName}/>)}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 3.5,

        alignItems: "center"
    }
})

export default SushiList