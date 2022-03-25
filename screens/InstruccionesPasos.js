import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, SafeAreaView, ScrollView } from 'react-native';
//import realm from '../REALMDB.js';
const InstruccionesPasos = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={{ flex: 1, flexDirection: 'column' }}>

                <View style={{ flex: 2,backgroundColor: '#DFDFE2' }}>
                    <View style={[styles.Instrucciones_Title,,{flex:1}]}>
                        <Text style={[styles.Instrucciones_Text, { fontSize: Dimensions.get('window').width / 14 }]}>Instrucciones del Juego</Text>
                    </View>

                </View>


                <View style={{ flex: 8,backgroundColor: '#DFDFE2'  }}>
                    <ScrollView style={{flex:1}}>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'  }}>
                            1)Llevar zapatos al zapatero.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'   }}>
                            2)Ir a buscar un regalo para los parientes a la casa de una amiga.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            3)Comprar caramelos de menta en el kiosco.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'   }}>
                            4)Mandar un paquete a unos familiares por correo.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            5)Pagar los impuestos en la oficina.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            6)Comprar pan en la panadería.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            7)Comprar café en el negocio de café.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify',marginHorizontal:'6%'   }}>
                            8)Esperar a unos parientes, que llegan en el tren de las 12:30 hs. a la estación.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            9)Comprar un libro en la librería.
                        </Text>
                        <Text style={{ fontSize: Dimensions.get('window').width / 14, textAlign: 'justify', marginHorizontal:'6%'  }}>
                            10)Comprar manteca en el almacén.

                        </Text>
                    </ScrollView>
                </View>
                <View style={{ flex: 3, backgroundColor: '#DFDFE2' }}>
                    <View style={{ alignContent: 'center', justifyContent: 'center',flex:3 }}>
                        <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => { navigation.navigate('Datos') }} >
                            <Text style={styles.Instrucciones_TextButton}>SIGUIENTE</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ alignContent: 'center', justifyContent: 'center',flex:3}}>
                        <TouchableOpacity style={styles.Instrucciones_Button} onPress={() => { navigation.navigate('Juego_Instrucciones') }} >
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
        //alignContent: 'center', 
        //justifyContent: 'center',
        //alignItems: 'center', 
        //textAlign: 'center',
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
        // ,
        backgroundColor: '#AABECF',
        padding: 10,
        elevation: 2,
        justifyContent: "center", alignItems: "center",
        textAlign: 'center',
    },
});

export default InstruccionesPasos;



