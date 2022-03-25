import React from 'react';
import {
    StyleSheet, View, Image,
    Text,ScrollView,
    TouchableOpacity, Dimensions, SafeAreaView
} from 'react-native';
//import realm from '../REALMDB.js';

const IndicacionesJuego = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 1,backgroundColor: '#DFDFE2' }}>
                    <View style={[styles.Instrucciones_Title,,{flex:1}]}>
                        <Text style={[styles.Instrucciones_Text, { fontSize: Dimensions.get('window').width / 14 }]}>Indicaciones Juego</Text>
                    </View>

                </View>


                <View style={{ flex: 9,backgroundColor: '#DFDFE2'  }}>
                    <ScrollView style={{flex:1, }}>
                    <Text style={{ fontSize: Dimensions.get('window').width / 14,textAlign: 'justify',marginHorizontal:'6%' }}>1.	Una vez cargado los datos personales correspondiente para realizar el juego. 
                    </Text>
                    <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'  }}>
                    2.	En cada localidad del mapa podrás hacer click y determinar el camino que tomara.
                                            </Text>
                        <View style={{justifyContent: 'center',alignItems: 'center',
    alignItems: 'center',}}>
                        <Image style={{justifyContent: 'center',alignItems: 'center',
    alignItems: 'center',}} source={require('@img/PantallaJuego-UnaLocalidad.png')} />
                        </View>
                        
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'  }}>
                        3.	Para deshacer una localidad marcada, debe revisar cual es la última localidad que hizo en su camino y hacer click. Con lo cual, debe seguir el orden de localidades que selecciono, podrá ver la lista de localidades que selecciono en la lista de localidades junto al mapa del juego.
                        </Text>
                        <View style={{justifyContent: 'center',alignItems: 'center',
    alignItems: 'center',}}>
                        <Image style={{justifyContent: 'center',
    alignItems: 'center',}} source={require('@img/PantallaJuego-DosLocalidades.png')} />
    </View>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'  }}>
                           
4.	En la pantalla del juego podría ver que hay un timer, posee 10 minutos para terminar. 
                        </Text>
                        <View style={{justifyContent: 'center',alignItems: 'center',
    alignItems: 'center',}}>
                        <Image style={{justifyContent: 'center',
    alignItems: 'center',}} source={require('@img/PantallaJuego-SinLocalidades.png')} />
    </View>
                    </ScrollView>
                </View>
                <View style={{ flex: 2,backgroundColor: '#DFDFE2' }}>
                    {/* <View style={{ alignContent: 'center', justifyContent: 'center',flex:3, }}>
                    <TouchableOpacity
                            style={styles.Instrucciones_Button}
                            onPress={() => { navigation.navigate('Juego_Instrucciones_Pasos') }}
                        >
                            <Text style={styles.Instrucciones_TextButton}>SIGUIENTE</Text>
                        </TouchableOpacity>
                        
                    </View> */}
                    <View style={{ alignContent: 'center', justifyContent: 'center',flex:3}}>
                    <TouchableOpacity
                            style={styles.Instrucciones_Button}
                            onPress={() => { navigation.navigate('Inicio') }}
                        >
                            <Text style={styles.Instrucciones_TextButton}>VOLVER</Text>
                        </TouchableOpacity>
                        
                    </View>
                    
                </View>
            </View>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    Instrucciones_View: {
        flexDirection: 'column',
        //backgroundColor: '#3671A3',
        backgroundColor: '#DFDFE2',
        flex: 1,
        alignContent: 'center', justifyContent: 'center'
    },
    Instrucciones_Text: {
        fontSize: Dimensions.get('window').width / 14,
        alignContent: 'center', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
    },
    Instrucciones_TextButton: {
        fontSize: Dimensions.get('window').width / 14,
        alignContent: 'center', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
    },
    Instrucciones_Title: {
        fontSize: Dimensions.get('window').width / 14,
        color: 'yellow',
        alignContent: 'center', justifyContent: 'center',
        backgroundColor: '#DFDFE2', textAlign: 'center', paddingBottom: '0%'
    },
    Instrucciones_Logo: {
        fontSize: Dimensions.get('window').width / 14,
        position: 'relative',
        alignContent: 'center', justifyContent: 'center',
        textAlign: 'center', width: 300,
    },
    Instrucciones_Button: {
        fontSize: Dimensions.get('window').width / 14,
        borderRadius: 10,
        //width antes era de 300
        //width: Dimensions.get('window').width * 0.85,
        backgroundColor: '#AABECF',
        padding: 10,
        elevation: 2,
        justifyContent: "center", alignItems: "center",
        textAlign: 'center',
    },
});

export default IndicacionesJuego;



