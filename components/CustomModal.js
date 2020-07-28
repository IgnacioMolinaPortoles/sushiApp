import React, { useState } from 'react'
import { StyleSheet, View, Modal, Text, Button, Alert, TextInput } from 'react-native';
import SushiBody from './SushiBody/SushiBody';
import Builder from './SushiBuilder/Builder';

const ing = [
    { "price": 1, "name": "Algas" },
    { "price": 2, "name": "Arroz" },
    { "price": 3, "name": "Palta" },
    { "price": 4, "name": "Cangrejo" },
    { "price": 5, "name": "Salmon" },
    { "price": 6, "name": "Camaron" },
    { "price": 7, "name": "Atun" },
    { "price": 8, "name": "Queso crema" },
    { "price": 10, "name": "Caviar" },
    { "price": 0.75, "name": "Zanahoria" },
    { "price": 0.5, "name": "Pepino" }
]

export const CustomModal = props => {

    const [ingredientData, setIngredientData] = useState(ing)
    const [ingredientsList, setIngredientsList] = useState([])
    const [total, setTotal] = useState(0)
    const [nombre, setNombre] = useState('')

    const addIngredientHandler = ingredient => {
        setIngredientsList(list => [...list, ingredient])
        setIngredientData(ingredientData.filter(item => item.name !== ingredient.name))
        setTotal(total => total + ingredient.price)
    }
    const deleteIngredientHandler = ingredient => {
        setIngredientsList(ingredientsList.filter(item => item.name !== ingredient.name))
        setIngredientData(ingredientData => [...ingredientData, ingredient])
        setTotal(total => total - ingredient.price)
    }
    const addSushi = () => {
        if(ingredientsList.length !== 0 && nombre !== ''){
            props.onAddSushi([ingredientsList,{"sushiName":nombre,"total":total}])
            setNombre('')
            setIngredientsList([])
            setIngredientData(ing)
            setTotal(0)
            props.hideModal()
        } else {
            Alert.alert("No puede haber elementos vacios (Nombre o Ingredientes)")
        }
    }
    const onChangeNombreHandler = (nombre) => {
        setNombre(nombre)
    }

    return (
        <Modal visible={props.visible} onDismiss={props.hideModal}>
            <View style={styles.modalContainer}>
                <TextInput onChangeText={onChangeNombreHandler} value={nombre} style={styles.modalTitle} placeholder="Ingrese un nombre"/>
            </View>

            <View style={styles.hr} />

            <SushiBody
                onDeleteIngredient={deleteIngredientHandler}
                ingredientsList={ingredientsList}
            />
            
            <View style={styles.hr} />

            <Builder
                total={total}
                ingredients={ingredientData}
                onAddIngredient={addIngredientHandler}
            />

            <View style={styles.buttonsContainer}>
                <Button title="Cerrar" onPress={props.hideModal} />
                <Button title="Añadir" onPress={() => addSushi()} />
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    buttonsContainer:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginBottom:10
    },
    modalContainer: {
        alignItems: "center"
    },
    modalTitle: {
        fontSize: 25,
        marginTop: 10
    },
    hr: {
        borderBottomColor: "#666",
        borderWidth: .5,
        width: "100%",
        marginVertical: 10
    }
});
