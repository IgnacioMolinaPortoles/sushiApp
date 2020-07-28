import React from 'react'
import { View, Text, StyleSheet, TouchableHighlight, Modal, Button } from 'react-native'

const SushiItem = props => {
    const [visible, setVisible] = React.useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);

    return (
        <View>
            <Modal style={styles.modalContainer} visible={visible} onDismiss={props.hideModal}>
                {props.ingredients.map((item, index) => {
                    return (
                        <Text key={index}>
                            {`${item.name} -> $${item.price}`}
                        </Text>
                    )
                })}
                <Button onPress={() => hideModal()} title="Cerrar"/>
            </Modal>

            <TouchableHighlight
                onPress={() => showModal()}
                style={styles.itemContainer}
                activeOpacity={0.8}
                underlayColor="#DDDDDD"
            >
                <Text>
                    {`${props.name} $${props.total}`}
                </Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({

    itemContainer: {
        borderColor: "green",
        borderWidth: 1,
        borderRadius: 8,
        marginBottom:10,
        width: "95%",
        padding: 20,
        justifyContent: "center",
    }
})

export default SushiItem
