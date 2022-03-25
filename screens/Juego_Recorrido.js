import React from 'react';
import {
  SafeAreaView,
  StyleSheet,FlatList,Modal,TouchableHighlight,
  Text,Dimensions,View,TouchableOpacity,
  useColorScheme,
} from 'react-native';

const Juego_Recorrido = ({navigation})=>{
  const [modalVisible, setModalVisible] = useState(false);
 
      return(
        <View style={styles.inicio_View}>
        <Text style ={{zIndex:10,top:340,textAlign:'center',backgroundColor:'white',alignContent:'center',justifyContent:'center'}}>ACA JUEGO RECORRIDO</Text>
        <View style={[styles.inicio_Title,{top:342}]}>
          <Text style={styles.inicio_Text}>Test de los Mandados</Text>
        </View>          
        
        <View style={{zIndex:10,color:'red',height:500,width:500,top:340,flex:1,left:150}}>
          <FlatList //lista de perrros en vista con sus nombres y ids
            data={['posicion        localidad      tiempo','1                  cafe                00:10','2                  panaderia      00:40',]}
            
            style={{fontSize:40,color:'white'}}
            renderItem={({ item }) =>
              <View style={{fontSize:30,color:'white',backgroundColor:'green',}}>
                  <Text style={{fontSize:30,color:'white'}}>{item}</Text>
              </View>
            }
            keyExtractor={(item) => item.toString()}
          />
          </View>
        <View style={{top:60,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={() => { navigation.navigate('Inicio') }}
          >
              <Text style={styles.inicio_Text}>Terminar</Text>
          </TouchableOpacity>
        </View>
        <View style={{top:80,backgroundColor:'red',alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:210}]}
            onPress={()=>{}}
          >
              <Text style={styles.inicio_Text}>00:00:00</Text>
          </TouchableOpacity>
          
        </View>
        <View style={[styles.RevisionGeneral_Button_info,{top:30}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={() => { setModalVisible(!modalVisible); }}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_info,{top:-300,}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}>≡</Text>
              </TouchableOpacity>
            </View>
            <View styles={{}}>
            <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
                >
                    <View style={{left:10,top:300,transform:[{rotate: '90 deg'}],backgroundColor:'white'}}>
                        <View style={{}}>
                            <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                            <TouchableHighlight
                                style={{ backgroundColor: "#34495E" }}
                                onPress={() => { setModalVisible(!modalVisible); }}
                            >
                                <Text style={{}}>continuar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
    </View>  
      )
  
}

const styles = StyleSheet.create({
  RevisionGeneral_Button_info:{
        backgroundColor:'white',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:-1, left:26,
      },
  inicio_View:{
    //flexDirection:'column',
    backgroundColor:'blue',
    flex:1,
    alignContent: 'center', justifyContent: 'center',
    transform:[{rotate: '90 deg'}],
    //width:Dimensions.get('window').height,
    height:Dimensions.get('window').width,
    width:Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text:{
    backgroundColor:'yellow', fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    borderWidth: 2,alignItems: 'center',textAlign:'center',
  },
  inicio_Title:{
    fontSize:30,
    color:'yellow',
    alignContent: 'center', justifyContent: 'center',
    backgroundColor:'blue',textAlign:'center',
  },
  inicio_Logo:{
    fontSize:30,
    position:'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign:'center',
  },
  inicio_Button:{
    fontSize:30,
    borderRadius:10,
    
    width:300,
    backgroundColor:'grey',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
});

export default Juego_Recorrido;