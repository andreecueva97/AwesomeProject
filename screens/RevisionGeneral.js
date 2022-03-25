import React, { useState,useEffect } from 'react';
import { Dimensions, StyleSheet, FlatList, Text, TouchableOpacity, SafeAreaView, View } from 'react-native';
import Realm from 'realm';

const RevisionGeneral = ({ navigation, route }) => {

  const {juegoId} = route.params;
  const [data_Mongo_One_Juego, setOneJuegoPorFetch] = useState();
  let realm;
  realm = new Realm({ path: 'version7.realm' });
  //const [juego, setJuego] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posiciones);
  //const [puntaje, setPuntaje] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].tipo);
  //const [juegoTiempo, setJuegoTiempo] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posicionesTiempo);
  const [juego, setJuego] = useState([]);
  //const [puntaje, setPuntaje] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].tipo);
  const [juegoTiempo, setJuegoTiempo] = useState([]);
  const obtenerOneJuegosPorFetch = async () =>{
    const dataExtraida = 
      await 
      fetch('https://backend-testmandados.herokuapp.com/api/juegos/'+juegoId,{
        method:'GET',
      })
      .then(response => response.json());
    setOneJuegoPorFetch(dataExtraida);
    setJuego(dataExtraida[0].posiciones);
    setJuegoTiempo(dataExtraida[0].posicionesTiempo);
    console.log(dataExtraida);
  }
  useEffect(() => {
    obtenerOneJuegosPorFetch();
    //console.log('revision general '+data_Mongo_One_Juego[0].id);
  }, []);
  //let tt = JSON.stringify(data_Mongo_One_Juego);
  console.log('-------------------------------------------------------revision general '+JSON.stringify(data_Mongo_One_Juego));
  console.log('aa');
  // ---- con REALM ---------- IMPORTANTE no BORRAR --------------------------------------------------------------------------------------------------------
 

  //--------------------------------------------------------------------------------------------------------------------------------------------------------
  //const [juego, setJuego] = useState(data_Mongo_One_Juego[0].posiciones);
  //const [puntaje, setPuntaje] = useState(data_Mongo_One_Juego[0].tipo);
  //const [juegoTiempo, setJuegoTiempo] = useState(data_Mongo_One_Juego[0].posicionesTiempo);
  
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 2, backgroundColor: '#DFDFE2' }}>
          <View style={{
            flex: 1, fontSize: Dimensions.get('window').width / 35,
            color: 'yellow',
            alignContent: 'center', justifyContent: 'center',
            backgroundColor: '#DFDFE2', textAlign: 'center', paddingBottom: '0%'
          }}>
            <Text style={{
              fontSize: Dimensions.get('window').width / 14,
              alignContent: 'center', justifyContent: 'center',
              alignItems: 'center', textAlign: 'center',
            }}>Revision General</Text>
          </View>

        </View>


        <View style={{ flex: 8, backgroundColor: '#DFDFE2' }}>
          <View style={{flex:1, }}>
          <View style={{flex:2, fontSize: Dimensions.get('window').width / 24, backgroundColor: '#DFDFE2', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row' }}>
            <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 4, fontSize: Dimensions.get('window').width / 24, justifyContent: "center", alignItems: "center" }}>Posicion</Text>
            </View>
            <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 2, fontSize: Dimensions.get('window').width / 24, justifyContent: "center", alignItems: "center" }}>Localidad</Text>
            </View>
            <View>
              <Text style={{ textAlign: 'center', width: Dimensions.get('window').width / 4, fontSize: Dimensions.get('window').width / 24, justifyContent: "center", alignItems: "center" }}>Tiempo</Text>
            </View>
          </View>
          <View style={{ flex: 8, alignContent: 'center', justifyContent: 'center', }}>

            <FlatList //lista de localidades en vista con sus nombres y ids y tiempo y posiciones de haber ido
              //data={realm.objects('Juego')}
              data={juego}
              style={{ fontSize: Dimensions.get('window').width / 24, color: 'white' }}
              renderItem={({ item }) =>
                <View style={{ fontSize: Dimensions.get('window').width / 24, backgroundColor: '#DFDFE2', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center" }}>
                  {/* {console.log(item), console.log(juego.findIndex((element) => element === item))} */}
                  <View style={{ backgroundColor: '#AABECF' }} >
                    <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 4, fontSize: Dimensions.get('window').width / 24, color: '#371B1F', top: '6%', backgroundColor: '#DFDFE2' }}>
                      {(juego.findIndex((element) => element === item))}
                    </Text>
                  </View>
                  <View style={{ backgroundColor: '#AABECF' }} >
                    <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 2, fontSize: Dimensions.get('window').width / 24, color: '#371B1F', top: '6%', backgroundColor: '#DFDFE2' }}>
                      {item}
                    </Text>
                  </View>
                  <View style={{ backgroundColor: '#AABECF' }} >
                    <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 4, fontSize: Dimensions.get('window').width / 24, color: '#371B1F', top: '6%', backgroundColor: '#DFDFE2' }}>
                      {juegoTiempo[(juego.findIndex((element) => element === item))]}
                    </Text>
                  </View>
                </View>
              }
              keyExtractor={(item) => item.toString()}
            />
            <View style={[styles.inicio_Logo, { flex:1,height: '12%', width: Dimensions.get('window').width, }]}>
              <Text style={[styles.inicio_Logo, { backgroundColor: '#DFDFE2', borderRadius: 10, fontSize: Dimensions.get('window').width / 20 }]}>
                {/* Tu puntuacion: {puntaje}. */}
                Gracias por participar</Text>
            </View>
          </View>
          </View>
        </View>
        <View style={{ flex: 3, backgroundColor: '#DFDFE2' }}>
          <View style={{ alignContent: 'center', justifyContent: 'center', flex: 3 }}>
            <TouchableOpacity
              style={styles.Instrucciones_Button}
              onPress={() => { navigation.navigate('Inicio') }}
            >
              <Text style={styles.Instrucciones_TextButton}>Terminar</Text>
            </TouchableOpacity>
            
          </View>
          <View style={{ alignContent: 'center', justifyContent: 'center', flex: 3 }}>
            <TouchableOpacity
              style={styles.Instrucciones_Button}
              onPress={() => { navigation.navigate('Datos') }}
            >
              <Text style={styles.Instrucciones_TextButton}>Repetir Juego</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
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
  RevisionGeneral_Button_info: {
    backgroundColor: 'white', alignContent: 'center',
    flexDirection: 'row',
    borderRadius: 40 / 2,
    height: 40, width: 40,

  },
  inicio_View: {
    //backgroundColor: '#3671A3',
    backgroundColor: '#DFDFE2',
    flex: 1,
    alignContent: 'center',
    flexDirection: 'column', justifyContent: 'center'
  },
  inicio_Text: {
    backgroundColor: '#DFDFE2', fontSize: Dimensions.get('window').width / 20,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 1, alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: Dimensions.get('window').width / 24,
    color: 'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor: 'blue', textAlign: 'center',
    flexDirection: 'row'
  },
  inicio_Logo: {
    fontSize: Dimensions.get('window').width / 20,
    //position:'relative',
    flexDirection: 'row',
    alignContent: 'center', justifyContent: 'center',
    textAlign: 'center',
  },
  inicio_Button: {

    width: Dimensions.get('window').width / 2,

    //////////
    fontSize: Dimensions.get('window').width / 24,
    borderRadius: 10,

    width: '80%',
    backgroundColor: '#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
});

export default RevisionGeneral;