import React, { useState } from 'react';
import { StyleSheet, View, Dimensions, Button } from 'react-native';
import Header from './components/Header';
import { CustomModal } from './components/CustomModal';
import SushiList from './components/SushisList/SushiList';

export default function App() {
  const [sushisList, setSushisList] = useState([])
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const addSushi = sushi => {
    setSushisList(list => [...list, sushi])
  }

  return (
    <View style={styles.container}>

      <Header title="Sushi Builder" />
      <View style={styles.hr} />

      <SushiList sushis={sushisList}/>

      <CustomModal
        hideModal={hideModal}
        visible={visible}
        onAddSushi={addSushi}
      />

      <View style={styles.footerContainer}>
        <Button title="Crear Nuevo" onPress={showModal} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#fff'
  },
  footerContainer: {
    flex:1,
    justifyContent: "flex-end",
    marginBottom:0
  },
  hr: {
    borderBottomColor: "#666",
    borderWidth: .5,
    width: "100%",
    marginVertical: 10
}
});
