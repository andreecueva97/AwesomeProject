//https://medium.com/geekculture/how-to-use-realm-local-db-in-react-native-4e9f9dfcbc53
import React, { useState, useEffect } from 'react';
import {  Dimensions, StyleSheet, FlatList,SafeAreaView,Text,TouchableOpacity,View, Modal,TouchableHighlight} from 'react-native';
import realm from '../REALMDB';
import { LogBox } from 'react-native';
import { DownloadDirectoryPath, getAllExternalFilesDirs, write} from 'react-native-fs';
//#############################################################################################const convertCsvToXlsx = require('@aternus/csv-to-xlsx');

const Puntuaciones = ({ navigation }) => {
  const [isloading,setIsLoading]=useState(true);
  LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
  LogBox.ignoreAllLogs(); //Ignore all log notifications
  const [modalVisible, setModalVisible] = useState(false);
  //import fs = require('fs');
  const { Parser, transforms: { unwind } } = require('json2csv');
  const [jsonArray,setJsonArray]=useState();
  const [data_Mongo_Juegos,setTodosLosJuegosPorFetch]= useState();
  console.log('data realm Juegos ----------------------------------');
  console.log(realm.objects('Juego'));
  //console.log('Usuarios en Puntuaciones--------------------------------');console.log(realm.objects('User'));
  //console.log(route.params.juegoId);
  //const [juego, setJuego] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posiciones);
  //const [juegoTiempo, setJuegoTiempo] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posicionesTiempo);
  let juegoRealizadosData = realm.objects('Juego');

//  const obtenertodosLosJuegosPorFetch = async () =>{
//    const dataExtraida =
//      await
//      fetch('https://backend-testmandados.herokuapp.com/api/juegos',{
//        method:'GET',
//      })
//      .then(response => response.json());
//      setTodosLosJuegosPorFetch(dataExtraida);
//  }
//  useEffect(() => {
//    
//    obtenertodosLosJuegosPorFetch();
//    setIsLoading(true);
//  }, []);
//  console.log('data mongo Juegos ########################');
//  console.log(data_Mongo_Juegos);

   //############################################################################################################CODE EXPORT CSV AND EXPORT XSLX
  // COLUMNAS que van a tener cada juego traido de la bd.
  const fieldExportData=(dataBase)=>{
    var RNFS = require('react-native-fs');
    console.log('fieldExportData @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    const fields = ['_id','id','tipo','user.id','user.name','user.edad','user.telefono','user.educacion','user.estadoCivil','user.genero','user._id' ,'posiciones[0]','posiciones[1]',
  'posiciones[2]','posiciones[3]','posiciones[4]','posiciones[5]','posiciones[6]','posiciones[7]','posiciones[8]','posiciones[9]','posiciones[10]',
  'posicionesTiempo[0]','posicionesTiempo[1]','posicionesTiempo[2]','posicionesTiempo[3]','posicionesTiempo[4]','posicionesTiempo[5]','posicionesTiempo[6]','posicionesTiempo[7]',
  'posicionesTiempo[8]','posicionesTiempo[9]','posicionesTiempo[10]',
  'posicionesNumericas[0]','posicionesNumericas[1]','posicionesNumericas[2]','posicionesNumericas[3]','posicionesNumericas[4]','posicionesNumericas[5]','posicionesNumericas[6]',
  'posicionesNumericas[7]','posicionesNumericas[8]','posicionesNumericas[9]','posicionesNumericas[10]','__v'];
    // indico que un objeto tiene otro objeto2 dentro de si mismo y voy a colocarlo en un mismo nivel que el objeto a los parametros del objeto2
    const transforms = [unwind({ paths: 'user'})];
    // indico que voy a pasear el JSON segun los fields que son las columnas que poseo y indicando las transformaciones dentro de cada obj. JSON
    const json2csvParser = new Parser({ fields, transforms });
    // realizo el PARSEO de los datos con las configuraciones preasignadaas en la linea anterior.
    const csvv = json2csvParser.parse(dataBase);
    console.log(csvv);
    console.log("parser");
  
    //escribo el archivo CSV parseado
    RNFS.writeFile(RNFS.ExternalStorageDirectoryPath +"/FINAL.csv", csvv,'utf8')
      .then((success) => {
        console.log('FILE WRITTEN! CSV FILE');
        console.log(RNFS.DownloadDirectoryPath+"/FINAL.csv");
      })  
      .catch((err) => {
        console.log(err.message);
      });
    //tomo la fecha de extraccion
      let date_ob = new Date();
      // current date
      // adjust 0 before single digit date
      let date = ("0" + date_ob.getDate()).slice(-2);
      // current month
      let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
      // current year
      let year = date_ob.getFullYear();
    //convierto en csv en STRING
      var array2 = csvv.toString();
      // analizo cada linea del archivo y lo divido por ; reemplazando el , para que pueda observar en cada celda del EXCEL
      var array2_1 = array2.split(',').join(';');
      console.log('array 22222222222222222222_1');
      console.log(array2_1);
      // en caso de ser necesario lo CONVIERTO a JSON de nuevo. // OPCIONAL NO LO ESTOY USANDO
      var json2_1 = JSON.stringify(array2_1);
      console.log(json2_1);
      //escribo el archivo CSV parseado Y bien transformado en XLSX.
      RNFS.writeFile(RNFS.ExternalStorageDirectoryPath +"/FINAL2-"+year + "-" + month + "-" + date+".csv", array2_1,'utf8')
      .then((success) => {
        console.log('FILE WRITTEN! xlsx FILE ');
        console.log(RNFS.DownloadDirectoryPath+"/FINAL.csv");
      })  
      .catch((err) => {
        console.log(err.message);
      });
    console.log(year + "-" + month + "-" + date);
  }

  
    //############################################################################################################CODE EXPORT CSV AND EXPORT XSLX
  const dataDeJuegosRealizados =()=>{
    if (isloading ==true){
      return(<FlatList //lista de localidades en vista con sus nombres y ids y tiempo y posiciones de haber ido //data={realm.objects('Juego')}
      data={juegoRealizadosData}
      //data={data_Mongo_Juegos}    // UTILIZAR PARA USAR LA BASE DE DATOS MONGO Y OBTENER LOS JUEGOS REALIZADOS POR PETICIONES FETCH.
      style={{ fontSize: Dimensions.get('window').width / 14, color: 'white' }}
      renderItem={({ item }) =>
        <View style={styles.viewGeneral_flatlist}>
          <TouchableOpacity style={styles.touchableButton} onPress={() => { navigation.navigate('Juego_Mapa_Recorrido', { juegoId: item.id }) }}>
            <View style={styles.view_flatlist} >
              <Text style={styles.idJuego }>{item.id.toString()}</Text>
            </View>
            <View style={styles.view_flatlist} >
              <Text style={styles.user}> {'     '}{item.user.estadoCivil}          </Text>
              <Text style={styles.user}> {item.user.telefono}{','}{item.user.name} </Text>
              <Text style={styles.user}> {'edad  '}{item.user.edad} {',puntos '} {item.tipo} </Text>
            </View>
            <View style={styles.view_flatlist} >
              <Text style={styles.posicionesTiempo}>{item.posicionesTiempo[10]}</Text>
            </View>
          </TouchableOpacity>
        </View>
      }
      keyExtractor={(item) => item.id + "_" + item.tipo + "_" + item.user + "_" + item.posiciones + "_" + item.posicionesTiempo + "_" + item.posicionesNumericas}
    />)
  }
  else{
    return (<View><Text>cargando Datos</Text></View>)
  }
  }
  
  return (
  <SafeAreaView style={{ flex: 1 }}>
    <View style={{ flex: 1, flexDirection: 'column' }}>

        <View style={{ flex: 2,backgroundColor: '#DFDFE2' }}>
            <View style={styles.puntuaciones_title}>
                <Text style={styles.puntuaciones_text}>Puntuaciones</Text>
            </View>
        </View>

        <View style={{ flex: 8,backgroundColor: '#DFDFE2'  }}>
            <View style={{flex:1,alignContent: 'center', justifyContent: 'center'}}>
              <View style={[styles.subtitle_portada]}>
                <View><Text style={[styles.subtitle, { width: Dimensions.get('window').width / 4 }]}>Juego</Text></View>
                <View><Text style={[styles.subtitle, { width: Dimensions.get('window').width / 2 }]}>Usuario</Text></View>
                <View><Text style={[styles.subtitle, { width: Dimensions.get('window').width / 4 }]}>Tiempo</Text></View>
              </View>
              {/* <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', }}> */}
              
              {dataDeJuegosRealizados()}
              {/* </View> */}
            </View>
        </View>
        
        <View style={{ flex: 3, backgroundColor: '#DFDFE2' }}>
          <View style={{ alignContent: 'center', justifyContent: 'center',flex:3 }}>
            <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => 
              { console.log('excel ----excel'); 
                console.log(DownloadDirectoryPath);
                //fieldExportData(data_Mongo_Juegos);// UTILIZAR EN CASO DE USAR MONGODB
                fieldExportData(juegoRealizadosData);
                setModalVisible(!modalVisible);
            }
              }>
              <Text style={styles.Instrucciones_TextButton}>EXPORTAR EXCEL</Text>
              
            </TouchableOpacity>
          </View>
          <View style={{ alignContent: 'center', justifyContent: 'center',flex:3 }}>
            <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => { navigation.navigate('Inicio') }}>
              <Text style={styles.Instrucciones_TextButton}>VOLVER</Text>
            </TouchableOpacity>
          </View>
          
        </View>
        <View styles={{}}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { Alert.alert("Modal fue cerrado."); setModalVisible(modalVisible => !modalVisible); }}
          >
            <View style={{ flex:1,justifyContent: "center", alignItems: "center" }}>
              <View style={styles.modalView2}>
                <Text style={{ fontSize: Dimensions.get('window').width / 30 }}>Se descargo el archivo correctamente.</Text>
                <TouchableHighlight
                  style={{ backgroundColor: "green" }}
                  onPress={() => { setModalVisible(modalVisible => !modalVisible) }}
                >
                  <Text style={{ color: 'white', fontSize: Dimensions.get('window').width / 30 }}>continuar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
    </View>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  modalView2: {
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
  subtitle_portada:{
    fontSize: Dimensions.get('window').width / 14, backgroundColor: '#DFDFE2', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row' 
  },
  idJuego:{
    textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width / 5, fontSize: Dimensions.get('window').width / 20, color: '#371B1F',
  },
  touchableButton:{
    fontSize: Dimensions.get('window').width / 14, backgroundColor: 'white', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center"
  },
  viewGeneral_flatlist:{
    fontSize: Dimensions.get('window').width / 14, backgroundColor: '#AABECF', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center"
  },
  view_flatlist:{
    backgroundColor: '#DFDFE2', height: Dimensions.get('window').width/5, top: Dimensions.get('window').width/100, textAlign: 'center', justifyContent: "center", alignItems: "center"
  },
  posicionesTiempo:{
    textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * (1 / 5), fontSize: Dimensions.get('window').width / 20, color: '#371B1F', backgroundColor: '#DFDFE2'
  },
  user:{
    textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * (3 / 5), fontSize: Dimensions.get('window').width / 36, color: '#371B1F', backgroundColor: '#DFDFE2'
  },
  subtitle:{
    textAlign: 'center', 
    backgroundColor: 'white', 
    color: 'grey', 
    fontSize: Dimensions.get('window').width / 25, 
    justifyContent: "center", 
    alignItems: "center" 
  },
  puntuaciones_title: {
    flex: 1, fontSize: Dimensions.get('window').width / 35,
            color: 'yellow',
            alignContent: 'center', justifyContent: 'center',
            backgroundColor: '#DFDFE2', textAlign: 'center', paddingBottom: '0%'
  },
  puntuaciones_text: {
    fontSize: Dimensions.get('window').width / 14,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center'
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
  Puntuaciones_Button_info: {
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
    backgroundColor: '#DFDFE2', fontSize: Dimensions.get('window').width / 8,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 1, alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: Dimensions.get('window').width / 14,
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

export default Puntuaciones;