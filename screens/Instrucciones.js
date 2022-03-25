import React from 'react';
import {
    StyleSheet, View, Image,
    Text,ScrollView,
    TouchableOpacity, Dimensions, SafeAreaView
} from 'react-native';
//import realm from '../REALMDB.js';

const Instrucciones = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 2,backgroundColor: '#DFDFE2' }}>
                    <View style={[styles.Instrucciones_Title,,{flex:1}]}>
                        <Text style={[styles.Instrucciones_Text, { fontSize: Dimensions.get('window').width / 14 }]}>Instrucciones del Juego</Text>
                    </View>

                </View>


                <View style={{ flex: 8,backgroundColor: '#DFDFE2'  }}>
                    <ScrollView style={{flex:1, }}>
                    <Text style={{ fontSize: Dimensions.get('window').width / 14,textAlign: 'justify',marginHorizontal:'6%' }}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs.
                        {/* // Tenés que hacer las siguientes tareas */}
                    </Text>
                    </ScrollView>
                </View>
                <View style={{ flex: 3,backgroundColor: '#DFDFE2' }}>
                    <View style={{ alignContent: 'center', justifyContent: 'center',flex:3, }}>
                    <TouchableOpacity
                            style={styles.Instrucciones_Button}
                            onPress={() => { navigation.navigate('Juego_Instrucciones_Pasos') }}
                        >
                            <Text style={styles.Instrucciones_TextButton}>SIGUIENTE</Text>
                        </TouchableOpacity>
                        
                    </View>
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

export default Instrucciones;



