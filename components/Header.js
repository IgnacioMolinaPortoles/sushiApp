import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
    return(
        <View>
            <Text style={styles.headerTitle}>
                {props.title}
            </Text>
        </View>
    )
} 

const styles = StyleSheet.create({
    headerTitle:{
        fontSize:40,
        marginLeft:"5%",
        marginTop:"10%",
        fontWeight:"600"
    }
})

export default Header
