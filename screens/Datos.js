import React, { useState, useEffect } from 'react';
import {   SafeAreaView, StyleSheet, TextInput, Dimensions, ScrollView, Text, View,  Modal, TouchableOpacity, Alert, LogBox,
} from 'react-native';
//import realm, { Juego, User, version3 } from '../REALMDB.js';

import realm from '../REALMDB';
LogBox.ignoreLogs([ 'Non-serializable values were found in the navigation state',]);
const Datos = ({ navigation }) => {
  
  const [nombre, setNombre] = useState('');
  const incrementNombre = () => setNombre('');
  const [educacion, seteducacion] = useState('');
  const [edad, setEdad] = useState('');
  const [telefono, settelefono] = useState('');
  const [estadoCivil, setEstadoCivil] = useState('');
  const [genero, setGenero] = useState('');
  const [userId, setUserId] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [data_Mongo_user, setTodosLosUsuariosPorFetch] = useState();
  const [data_Mongo_user_create, setCreateUserPorFetch] = useState(0);
  console.log(data_Mongo_user);
  useEffect(() => { }, [userId]);
  
  const obtenertodosLosUsuariosPorFetch = async () =>{
    const dataExtraida = 
      await 
      fetch('https://backend-testmandados.herokuapp.com/api/users',{
        method:'GET',
      })
      .then(response => response.json());
    setTodosLosUsuariosPorFetch(dataExtraida.length);
  }
  obtenertodosLosUsuariosPorFetch();
  const creacionUsuarioPorFetch = async (lastt) =>{
    const dataExtraidaa =
      await
      fetch('https://backend-testmandados.herokuapp.com/api/users',{
        method:'POST',
        headers:{
          Accept:'application/JSON',
          'Content-Type':'application/JSON',
        },
        body:JSON.stringify({
          id: lastt,
          name: nombre,
          edad: edad,
          telefono: telefono,
          educacion: educacion,
          estadoCivil:estadoCivil,
          genero:genero
        })
      })
      .then(response=>response.text())
      .then(response => {console.log('fetch usuario creado '+response)})
      .catch(e=> console.log(e)); 
    console.log(dataExtraidaa);
  }
  const deleteAllUserRealm = ()=>{realm.write(() => { realm.deleteAll();  });}

  const agregarUser = () => {
    
    console.log(realm.objects('User').length);
    let last = realm.objects('User').length + 1;
    console.log('Users Viejos ----------------------------------------------------');
    console.log(realm.objects('User'));
    realm.write(() => {
      realm.create('User', {
        id: last,
        name: nombre,
        educacion: educacion,
        edad: edad,
        telefono: telefono,
        estadoCivil:estadoCivil,
        genero:genero
      });
    });
    
    console.log('Users Update-------------------------------------------------');
    console.log(realm.objects('User'));
    setUserId(realm.objects('User').length + 1);
    incrementNombre();
    console.log(realm.objects('User')[realm.objects('User').length - 1]);
    // PETICION FETCH
   
    creacionUsuarioPorFetch(data_Mongo_user+1);
    setCreateUserPorFetch(data_Mongo_user+1);
    // SET DATOS NULOS
    setNombre('');seteducacion('');setEdad('');settelefono('');setEstadoCivil('');setGenero('');

    // MOVIMIENTO A LA PANTALLA SIGUIENTE
    navigation.navigate('Juego_Mapa', { 
                            user: realm.objects('User')[realm.objects('User').length - 1],
                            userIdd:(data_Mongo_user+1), 
                          });
  }
 
  console.log('datos mongo '+ data_Mongo_user);
  console.log('datos mongo create '+ data_Mongo_user_create);
  const handleVerificateOfData = () => {
    if (nombre !== '' && educacion !== '' && edad !== '' && telefono !== '' && genero !== '' && estadoCivil !== '') {
      agregarUser();
    }
    else {
      //console.log('falta su completar datos del usuario');
      setModalVisible(!modalVisible);
    }
         
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 2, backgroundColor: 'blue' }}>
          <View style={[styles.tituloDeDatos]}>
            <Text style={styles.inicio_Text}>Para comenzar, debe ingresar los siguientes datos</Text>
          </View>
        </View>

        <View style={{ flex: 8, backgroundColor: '#DFDFE2' }}>
          <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
            <ScrollView style={{ flex: 1, textAlign: 'center' }}>
              <TextInput style={styles.datos_textinput}
                underlineColorAndroid="transparent"
                placeholder="nombre"
                placeholderTextColor="black"
                autoCapitalize="none"
                defaultValue={nombre}
                onChangeText={nombre => setNombre(nombre)}
              />

              <TextInput style={styles.datos_textinput}
                placeholder="educacion"
                placeholderTextColor="black"
                defaultValue={educacion}
                onChangeText={seteducacion}
              />
              <TextInput style={styles.datos_textinput}
                placeholder="estadoCivil"
                placeholderTextColor="black"
                defaultValue={estadoCivil}
                onChangeText={setEstadoCivil}
              />
              <TextInput style={styles.datos_textinput}
                placeholder="Genero (Masc,Fem,Otro)"
                placeholderTextColor="black"
                defaultValue={genero}
                onChangeText={setGenero}
              />
              <TextInput style={styles.datos_textinput}
                underlineColorAndroid="transparent"
                placeholder="edad"
                keyboardType="numeric"
                placeholderTextColor="black"
                autoCapitalize="none"
                defaultValue={edad}
                onChangeText={edad => setEdad(edad)}
                maxLength={3}
              />

              <TextInput style={styles.datos_textinput}
                underlineColorAndroid="transparent"
                placeholder="telefono"
                keyboardType="numeric"
                placeholderTextColor="black"
                autoCapitalize="none"
                defaultValue={telefono}
                onChangeText={telefono => settelefono(telefono)}
                maxLength={10}
              />
            </ScrollView>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: '#DFDFE2' }}>
          <View style={{ alignContent: 'center', justifyContent: 'center', flex: 3 }}>
            <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => { handleVerificateOfData(); }} >
              <Text style={styles.Instrucciones_TextButton}>INICIAR JUEGO</Text>
            </TouchableOpacity>
          </View>
          <View style={{ alignContent: 'center', justifyContent: 'center', flex: 3 }}>
            <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => { navigation.navigate('Juego_Instrucciones_Pasos') }} >
              <Text style={styles.Instrucciones_TextButton}>VOLVER</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={{ flex: 1, justifyContent: "center", alignItems: "center", }}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Complete todos los campos de los datos del juego</Text>
              <TouchableOpacity
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={styles.textStyle}>continuar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>

    </SafeAreaView>
  )


}
const styles = StyleSheet.create({
  tituloDeDatos:{
    flex: 1, fontSize: Dimensions.get('window').width / 35,
            color: 'yellow',
            alignContent: 'center', justifyContent: 'center',
            backgroundColor: '#DFDFE2', textAlign: 'center', paddingBottom: '0%'
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#DFDFE2",
  },
  buttonClose: {
    backgroundColor: "#AABECF",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  Instrucciones_TextButton: {
    fontSize: Dimensions.get('window').width / 14,
    //alignContent: 'center', 
    //justifyContent: 'center',
    //alignItems: 'center', 
    //textAlign: 'center',
  },
  Instrucciones_Button: {
    fontSize: Dimensions.get('window').width / 14,
    borderRadius: 10,
    //width antes era de 300
    // ,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
  datos_textinput: {
    margin: 15,
    // height: '5%',
    borderColor: 'white',
    borderWidth: 1,
    fontSize: Dimensions.get('window').width / 18
  },
  inicio_View: {
    flexDirection: 'column',
    //backgroundColor: '#3671A3',
    backgroundColor: '#DFDFE2',
    flex: 1,
    alignContent: 'center', justifyContent: 'center',
    paddingTop: 0,
  },
  inicio_TextButton: {
    fontSize: Dimensions.get('window').width / 14,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Text: {
    backgroundColor: '#DFDFE2', fontSize: Dimensions.get('window').width / 14,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center'
  },
  inicio_Button: {
    fontSize: Dimensions.get('window').width / 35,
    borderRadius: 10,
    width: Dimensions.get('window').width * 0.85,
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  }
});

export default Datos;