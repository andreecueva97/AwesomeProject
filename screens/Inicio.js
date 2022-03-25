import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity, Dimensions, SafeAreaView} from 'react-native';
//import realm from '../REALMDB.js';

import { LogBox } from 'react-native';
 // Ignore log notification by message
//LogBox.ignoreAllLogs(); //Ignore all log notifications
const Inicio = ({ navigation }) => {
  LogBox.ignoreLogs(['new NativeEventEmitter()',]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.inicio_View}>
        <View style={[styles.inicio_Title, { width: Dimensions.get('window').width }]}>
          <Text style={styles.inicio_Text}>Test de los Mandados</Text>
          {/* <Text style={styles.inicio_Text}>{RNFS.DocumentDirectoryPath}</Text> */}
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 300, height: 300 }} source={require('@img/logo.png')} />
        </View>
        <View style={styles.ViewButtonn}>
          <TouchableOpacity  style={styles.inicio_Button}  onPress={() => { navigation.navigate('Juego_Instrucciones') }} >
            <Text style={styles.inicio_TextButton}>INICIAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ViewButtonn}>
          <TouchableOpacity style={styles.inicio_Button} onPress={() => { navigation.navigate('Indicaciones_Juego') }}>
            <Text style={styles.inicio_TextButton}>INSTRUCCIONES</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ViewButtonn}>
          <TouchableOpacity style={styles.inicio_Button} onPress={() => { navigation.navigate('Puntuaciones') }}>
            <Text style={styles.inicio_TextButton}>PUNTUACIONES</Text>
          </TouchableOpacity>
        </View>
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  ViewButtonn:{
    alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, marginBottom: 10
  },
  inicio_View: {
    flexDirection: 'column', //backgroundColor: '#3671A3',
    backgroundColor: '#DFDFE2',
    flex: 1,
    alignContent: 'center', justifyContent: 'center'
  },
  inicio_Text: {
    fontSize: 35,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_TextButton: {
    fontSize: Dimensions.get('window').width / 14,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: 30,
    color: 'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor: '#DFDFE2', textAlign: 'center',
  },
  inicio_Logo: {
    fontSize: 30,
    position: 'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign: 'center', width: Dimensions.get('window').width * 0.85,
  },
  inicio_Button: {
    fontSize: 30,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
});

export default Inicio;



