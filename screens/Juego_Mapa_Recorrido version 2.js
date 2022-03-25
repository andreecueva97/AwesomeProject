import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, Text, View, TouchableHighlight, Modal, Alert, FlatList } from 'react-native';
import Clock from '../components/Clock';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Realm from 'realm';
import { SafeAreaView } from 'react-native-safe-area-context';

const Juego_Mapa_Recorrido = ({ navigation, route }) => {
    //const {navigation} = this.props;
    // const [minutoMapa, setMinutoMapa] = useState(0);//era 10
    //const [segundoMapa, setSegundoMapa] = useState(45);
    //console.log('============================SCREEN JUEGO_MAPA_Recorrido   ROUTE');
    //console.log(route.params.juegoId);
    // console.log('USER===>' + route.params.user.id);
    // console.log('USER===>' + route.params.user.name);
    // console.log('USER===>' + route.params.user.apellido);
    // console.log('USER===>' + route.params.user.edad);
    const [modalVisible, setModalVisible] = useState(false);
    let realm;
    realm = new Realm({ path: 'version6.realm' });

    const [posiciones, setPosiciones] = useState(['la casa']);
    const [estado0, setEstado0] = useState([]); const [estado1, setEstado1] = useState([]); const [estado2, setEstado2] = useState([]); const [estado3, setEstado3] = useState([]);
    const [estado4, setEstado4] = useState([]); const [estado5, setEstado5] = useState([]); const [estado6, setEstado6] = useState([]); const [estado7, setEstado7] = useState([]);
    const [estado8, setEstado8] = useState([]); const [estado9, setEstado9] = useState([]); const [estado10, setEstado10] = useState([]); const [estado11, setEstado11] = useState([]);
    const [estadoC0, setEstadoC0] = useState([]); const [estadoC1, setEstadoC1] = useState([]); const [estadoC2, setEstadoC2] = useState([]); const [estadoC3, setEstadoC3] = useState([]);
    const [estadoC4, setEstadoC4] = useState([]); const [estadoC5, setEstadoC5] = useState([]); const [estadoC6, setEstadoC6] = useState([]); const [estadoC7, setEstadoC7] = useState([]);
    const [estadoC8, setEstadoC8] = useState([]); const [estadoC9, setEstadoC9] = useState([]); const [estadoC10, setEstadoC10] = useState([]); const [estadoC11, setEstadoC11] = useState([]);
    const [posicionesNumericas, setPosicionesNumericas] = useState([0]);
    const [estadoPosiciones, setEstadoPosiciones] = useState([['la casa']]);

    const [matriz, setMatriz] = useState([
        [{ posicion: ['0'] }, { posicion: ['c', 'b', 'a'] }, { posicion: ['e', 'd', 'c', 'b', 'a'] }, { posicion: ['ae', 'a'] }, { posicion: ['aa', 'ac', 'ad', 'ae', 'a'] }, { posicion: ['s', 'r', 'b', 'a'] }, { posicion: ['z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['j', 'k', 'v', 'x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['g', 'f', 'e', 'd', 'c', 'b', 'a', 'l'] }],
        [{ posicion: ['c', 'b', 'a'] }, { posicion: ['0'] }, { posicion: ['e', 'd'] }, { posicion: ['ae', 'b', 'c'] }, { posicion: ['c', 'r', 's', 'ab', 'aa'] }, { posicion: ['c', 'r', 's'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p', 'e', 'd'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'e', 'd', 'l'] }, { posicion: ['w', 'aa', 'ac', 'am', 'r', 'c', 'nlg'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'l'] }, { posicion: ['g', 'f', 'e', 'd', 'l'] }],
        [{ posicion: ['e', 'd', 'c', 'b', 'a'] }, { posicion: ['e', 'd'] }, { posicion: ['0'] }, { posicion: ['p', 'q', 'am', 'ad'] }, { posicion: ['p', 'q', 'am', 'ac', 'aa'] }, { posicion: ['p', 'q', 's'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'l'] }, { posicion: ['w', 'aa', 'ac', 'am', 'q', 'p', 'nlg'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'l'] }, { posicion: ['g', 'f', 'l'] }],
        [{ posicion: ['ae', 'a'] }, { posicion: ['ae', 'b', 'c'] }, { posicion: ['p', 'q', 'am', 'ad'] }, { posicion: ['0'] }, { posicion: ['ad', 'ac', 'aa'] }, { posicion: ['ad', 'ac', 'ab'] }, { posicion: ['z', 'ag', 'af'] }, { posicion: ['y', 'z', 'ag', 'af'] }, { posicion: ['w', 'aa', 'ac', 'ad', 'nlg'] }, { posicion: ['j', 'k', 'v', 'w', 'aa', 'ac', 'ad', 'nlg'] }, { posicion: ['ah', 'n', 'ak', 'ab', 'ac', 'ad'] }],
        [{ posicion: ['aa', 'ac', 'ad', 'ae', 'a'] }, { posicion: ['c', 'r', 's', 'ab', 'aa'] }, { posicion: ['p', 'q', 'am', 'ac', 'aa'] }, { posicion: ['ad', 'ac', 'aa'] }, { posicion: ['0'] }, { posicion: ['aa', 'ab'] }, { posicion: ['aa', 'an', 'z'] }, { posicion: ['x', 'w', 'nlg'] }, { posicion: ['w', 'nlg'] }, { posicion: ['j', 'k', 'v', 'w', 'nlg'] }, { posicion: ['ah', 'aj', 'u', 'w'] }],
        [{ posicion: ['s', 'r', 'b', 'a'] }, { posicion: ['c', 'r', 's'] }, { posicion: ['p', 'q', 's'] }, { posicion: ['ad', 'ac', 'ab'] }, { posicion: ['aa', 'ab'] }, { posicion: ['0'] }, { posicion: ['ab', 'an', 'z'] }, { posicion: ['t', 'u', 'x'] }, { posicion: ['t', 'u'] }, { posicion: ['j', 'k', 'v', 'u', 't'] }, { posicion: ['ah', 'aj', 't'] }],
        [{ posicion: ['z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p', 'e', 'd'] }, { posicion: ['z', 'an', 'ab', 's', 'q', 'p'] }, { posicion: ['z', 'ag', 'af'] }, { posicion: ['aa', 'an', 'z'] }, { posicion: ['ab', 'an', 'z'] }, { posicion: ['0'] }, { posicion: ['y'] }, { posicion: ['x', 'y'] }, { posicion: ['j', 'k', 'v', 'x', 'y'] }, { posicion: ['h', 'i', 'k', 'v', 'x', 'y'] }],
        [{ posicion: ['y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'e', 'd', 'l'] }, { posicion: ['x', 'v', 'k', 'i', 'h', 'g', 'f', 'l'] }, { posicion: ['y', 'z', 'ag', 'af'] }, { posicion: ['x', 'w', 'nlg'] }, { posicion: ['t', 'u', 'x'] }, { posicion: ['y'] }, { posicion: ['0'] }, { posicion: ['x'] }, { posicion: ['j', 'k', 'v', 'x'] }, { posicion: ['h', 'i', 'k', 'v', 'x'] }],
        [{ posicion: ['x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['w', 'aa', 'ac', 'am', 'r', 'c', 'nlg'] }, { posicion: ['w', 'aa', 'ac', 'am', 'q', 'p', 'nlg'] }, { posicion: ['w', 'aa', 'ac', 'ad', 'nlg'] }, { posicion: ['w', 'nlg'] }, { posicion: ['t', 'u'] }, { posicion: ['x', 'y'] }, { posicion: ['x'] }, { posicion: ['0'] }, { posicion: ['v', 'k', 'j'] }, { posicion: ['h', 'i', 'k', 'v'] }],
        [{ posicion: ['j', 'k', 'v', 'x', 'y', 'z', 'ag', 'af', 'ae', 'a'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'l'] }, { posicion: ['j', 'i', 'h', 'g', 'f', 'l', 'nlg'] }, { posicion: ['j', 'k', 'v', 'w', 'aa', 'ac', 'ad', 'nlg'] }, { posicion: ['j', 'k', 'v', 'w', 'nlg'] }, { posicion: ['j', 'k', 'v', 'u', 't'] }, { posicion: ['j', 'k', 'v', 'x', 'y'] }, { posicion: ['j', 'k', 'v', 'x'] }, { posicion: ['v', 'k', 'j'] }, { posicion: ['0'] }, { posicion: ['h', 'i', 'j'] }],
        [{ posicion: ['g', 'f', 'e', 'd', 'c', 'b', 'a', 'l'] }, { posicion: ['g', 'f', 'e', 'd', 'l'] }, { posicion: ['g', 'f', 'l'] }, { posicion: ['ah', 'n', 'ak', 'ab', 'ac', 'ad'] }, { posicion: ['ah', 'aj', 'u', 'w'] }, { posicion: ['ah', 'aj', 't'] }, { posicion: ['h', 'i', 'k', 'v', 'x', 'y'] }, { posicion: ['h', 'i', 'k', 'v', 'x'] }, { posicion: ['h', 'i', 'k', 'v'] }, { posicion: ['h', 'i', 'j'] }, { posicion: ['0'] }],




    ]
    );
    const [images, setImages] = useState(
        [
            { source: require('@img/a.png'), opacity: 0, name: 'a' },
            { source: require('@img/b.png'), opacity: 0, name: 'b' },
            { source: require('@img/c.png'), opacity: 0, name: 'c' },
            { source: require('@img/d.png'), opacity: 0, name: 'd' },
            { source: require('@img/e.png'), opacity: 0, name: 'e' },
            { source: require('@img/f.png'), opacity: 0, name: 'f' },
            { source: require('@img/g.png'), opacity: 0, name: 'g' },
            { source: require('@img/h.png'), opacity: 0, name: 'h' },
            { source: require('@img/i.png'), opacity: 0, name: 'i' },
            { source: require('@img/j.png'), opacity: 0, name: 'j' },
            { source: require('@img/k.png'), opacity: 0, name: 'k' },
            { source: require('@img/l.png'), opacity: 0, name: 'l' },//AI-EXT => L ahora, es una pequena difurcasion que me di cuenta luego
            { source: require('@img/m.png'), opacity: 0, name: 'm' },
            { source: require('@img/n.png'), opacity: 0, name: 'n' },
            { source: require('@img/o.png'), opacity: 0, name: 'o' },
            { source: require('@img/p.png'), opacity: 0, name: 'p' },
            { source: require('@img/q.png'), opacity: 0, name: 'q' },
            { source: require('@img/r.png'), opacity: 0, name: 'r' },
            { source: require('@img/s.png'), opacity: 0, name: 's' },
            { source: require('@img/t.png'), opacity: 0, name: 't' },
            { source: require('@img/u.png'), opacity: 0, name: 'u' },
            { source: require('@img/v.png'), opacity: 0, name: 'v' },
            { source: require('@img/w.png'), opacity: 0, name: 'w' },
            { source: require('@img/x.png'), opacity: 0, name: 'x' },
            { source: require('@img/y.png'), opacity: 0, name: 'y' },
            { source: require('@img/z.png'), opacity: 0, name: 'z' },
            { source: require('@img/aa.png'), opacity: 0, name: 'aa' },
            { source: require('@img/ab.png'), opacity: 0, name: 'ab' },
            { source: require('@img/ac.png'), opacity: 0, name: 'ac' },
            { source: require('@img/ad.png'), opacity: 0, name: 'ad' },
            { source: require('@img/ae.png'), opacity: 0, name: 'ae' },
            { source: require('@img/af.png'), opacity: 0, name: 'af' },
            { source: require('@img/ag.png'), opacity: 0, name: 'ag' },
            { source: require('@img/ah.png'), opacity: 0, name: 'ah' },
            { source: require('@img/ai.png'), opacity: 0, name: 'ai' },
            { source: require('@img/aj.png'), opacity: 0, name: 'aj' },
            { source: require('@img/ak.png'), opacity: 0, name: 'ak' },
            { source: require('@img/am.png'), opacity: 0, name: 'am' },
            { source: require('@img/an.png'), opacity: 0, name: 'an' },
            { source: require('@img/nuevaLineaAgregada.png'), opacity: 0, name: 'nlg' },//nuevalineaagregada
        ]

    );

    const funca = (a) => {
        let ia = images.map(el => (
            el.name === a ? { ...el, opacity: 1 } : el
        ));
        setImages(images => images.map(el => (
            el.name === a ? { ...el, opacity: 1 } : el
        )));
    };
    const getOc = (array, value) => {
        var count = 0;
        array.forEach((v) => (v === value && count++));
        return count;
    };

    const asignarCaminoNumerico = (posicionSiguiente) => {
        if ('almacen' == posicionSiguiente) {
            posicionesNumericas.push(1);
        }
        if ('cafe' == posicionSiguiente) {
            posicionesNumericas.push(2);
        }
        if ('panaderia' == posicionSiguiente) {
            posicionesNumericas.push(3);
        }
        if ('amiga' == posicionSiguiente) {
            posicionesNumericas.push(4);
        }
        if ('oficina' == posicionSiguiente) {
            posicionesNumericas.push(5);
        }
        if ('libreria' == posicionSiguiente) {
            posicionesNumericas.push(6);
        }
        if ('kiosko' == posicionSiguiente) {
            posicionesNumericas.push(7);
        }
        if ('estacion' == posicionSiguiente) {
            posicionesNumericas.push(8);
        }
        if ('zapatero' == posicionSiguiente) {
            posicionesNumericas.push(9);
        }
        if ('correo' == posicionSiguiente) {
            posicionesNumericas.push(10);
        }
    }

    const asignarNumero = (posicionSiguiente) => {
        if ('almacen' == posicionSiguiente) {
            return 1;
        }
        if ('cafe' == posicionSiguiente) {
            return 2;
        }
        if ('panaderia' == posicionSiguiente) {
            return 3;
        }
        if ('amiga' == posicionSiguiente) {
            return 4;
        }
        if ('oficina' == posicionSiguiente) {
            return 5;
        }
        if ('libreria' == posicionSiguiente) {
            return 6;
        }
        if ('kiosko' == posicionSiguiente) {
            return 7;
        }
        if ('estacion' == posicionSiguiente) {
            return 8;
        }
        if ('zapatero' == posicionSiguiente) {
            return 9;
        }
        if ('correo' == posicionSiguiente) {
            return 10;
        }
    }
    // const vueltaCaminoEstadoAnterior = (estadoAnterior) => {
    //     for (let index = 0; index < estadoAnterior.length; index++) {
    //         const element = estadoAnterior[index];
    //         funca(element);
    //         //console.log(element);
    //     }
    // }
    // const popEstado = (array) => {
    //     if (array.length - 1 == 1) {//PASA DEL ESTADO 0 => ESTADO 1
    //         empty(estado0);
    //         empty(estado1);
    //         //empty(estadoT0);
    //      //   empty(estadoT1);
    //         empty(estadoC1);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //     }
    //     if (array.length - 1 == 2) {//ESTADO 1 => ESTADO 2
    //         empty(estado2);
    //       //  empty(estadoT2);
    //         empty(estadoC2);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC1);
    //     }
    //     if (array.length - 1 == 3) {//ESTADO 2 => ESTADO 3
    //         empty(estado3);
    //     //    empty(estadoT3);
    //         empty(estadoC3);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC2);
    //     }
    //     if (array.length - 1 == 4) {//ESTADO 3 => ESTADO 4
    //         empty(estado4);
    //      //   empty(estadoT4);
    //         empty(estadoC4);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC3);
    //     }
    //     if (array.length - 1 == 5) {//ESTADO 4 => ESTADO 5
    //         empty(estado5);
    //       //  empty(estadoT5);
    //         empty(estadoC5);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC4);
    //     }
    //     if (array.length - 1 == 6) {//ESTADO 5 => ESTADO 6
    //         empty(estado6);
    //       //  empty(estadoT6);
    //         empty(estadoC6);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC5);
    //     }
    //     if (array.length - 1 == 7) {//ESTADO 6 => ESTADO 7
    //         empty(estado7);
    //       //  empty(estadoT7);
    //         empty(estadoC7);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC6);
    //     }
    //     if (array.length - 1 == 8) {//ESTADO 7 => ESTADO 8
    //         empty(estado8);
    //      //   empty(estadoT8);
    //         empty(estadoC8);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC7);
    //     }
    //     if (array.length - 1 == 9) {//ESTADO 8 => ESTADO 9
    //         empty(estado9);
    //       //  empty(estadoT9);
    //         empty(estadoC9);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC8);
    //     }
    //     if (array.length - 1 == 10) {//ESTADO 9 => ESTADO 10
    //         empty(estado10);
    //       //  empty(estadoT10);
    //         empty(estadoC10);
    //         setImages(images => images.map(el => (
    //             { ...el, opacity: 0 }
    //         )));
    //         vueltaCaminoEstadoAnterior(estadoC9);

    //     }
    //     // console.log(estado1 + '=>' + estadoT1);
    //     // console.log(estado2 + '=>' + estadoT2);
    //     // console.log(estado3 + '=>' + estadoT3);
    //     // console.log(estado4 + '=>' + estadoT4);
    //     // console.log(estado5 + '=>' + estadoT5);
    //     // console.log(estado6 + '=>' + estadoT6);
    //     // console.log(estado7 + '=>' + estadoT7);
    //     // console.log(estado8 + '=>' + estadoT8);
    //     // console.log(estado9 + '=>' + estadoT9);
    //     // console.log(estado10 + '=>' + estadoT10);
    // }
    const marcarNumeroLocalidad = (numeroLocalidad) => {
        if (posicionesNumericas.findIndex(element => element === numeroLocalidad) == -1) {
            return ''; //console.log('no esta en el array1')//array1.push(item) //estadoCx.push(item)
        }
        else {
            return posicionesNumericas.findIndex(element => element === numeroLocalidad);
            //console.log('esta en el array1') // NO AGREGAR AL ARRAY1 principal
        };
    }
    const marcarRutaEstado = (estadox1, estadox2) => {
        estadox1.map((item) => {
            if (estadox2.findIndex(element => element === item) == -1) {
                /// console.log('calle no esta en el nuevo estado agregarlo porfavor')//array1.push(item) 
                estadox2.push(item);
            }
            else {
                //console.log('calle si existe en este estado No agregar') // NO AGREGAR AL ARRAY1 principal
            };
        })
        console.log('ESTADO NUEVO =>>>' + estadox2);

        for (let index = 0; index < estadox2.length; index++) {
            const element = estadox2[index];
            funca(element);
        }
    }

    const asociarArray = (array, value) => {
        if (array.length == 1) {//PASA DEL ESTADO 0 => ESTADO 1
            estado0.push('la casa');
            estado1.push('casa');
            estado1.push(value);
            (matriz[0][asignarNumero(value)].posicion).map((item) => estadoC1.push(item))
            console.log('estadoC1 ~~~~~~~' + estadoC1);
            console.log(estadoC1);
            for (let index = 0; index < estadoC1.length; index++) {
                const element = estadoC1[index];
                funca(element);
            }
        }
        if (array.length == 2) {//ESTADO 1 => ESTADO 2
            estado1.map((item) => estado2.push(item))
            estado2.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC2.push(item))
            console.log('estadoC2 ~~~~~~~' + estadoC2);
            marcarRutaEstado(estadoC1, estadoC2);
        }
        if (array.length == 3) {//ESTADO 2 => ESTADO 3
            estado2.map((item) => estado3.push(item))
            estado3.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC3.push(item))
            console.log('estadoC3 ~~~~~~~' + estadoC3);
            marcarRutaEstado(estadoC2, estadoC3);
        }
        if (array.length == 4) {//ESTADO 3 => ESTADO 4
            estado3.map((item) => estado4.push(item))
            estado4.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC4.push(item))
            console.log('estadoC4 ~~~~~~~' + estadoC4);
            marcarRutaEstado(estadoC3, estadoC4);
        }
        if (array.length == 5) {//ESTADO 4 => ESTADO 5
            estado4.map((item) => estado5.push(item))
            estado5.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC5.push(item))
            console.log('estadoC5 ~~~~~~~' + estadoC5);
            marcarRutaEstado(estadoC4, estadoC5);
        }
        if (array.length == 6) {//ESTADO 5 => ESTADO 6
            estado5.map((item) => estado6.push(item))
            estado6.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC6.push(item))
            console.log('estadoC6 ~~~~~~~' + estadoC6);
            marcarRutaEstado(estadoC5, estadoC6);
        }
        if (array.length == 7) {//ESTADO 6 => ESTADO 7
            estado6.map((item) => estado7.push(item))
            estado7.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC7.push(item))
            console.log('estadoC7 ~~~~~~~' + estadoC7);
            marcarRutaEstado(estadoC6, estadoC7);
        }
        if (array.length == 8) {//ESTADO 7 => ESTADO 8
            estado7.map((item) => estado8.push(item))
            estado8.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC8.push(item))
            console.log('estadoC8 ~~~~~~~' + estadoC8);
            marcarRutaEstado(estadoC7, estadoC8);
        }
        if (array.length == 9) {//ESTADO 8 => ESTADO 9
            estado8.map((item) => estado9.push(item))
            estado9.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC9.push(item))
            console.log('estadoC9 ~~~~~~~' + estadoC9);
            marcarRutaEstado(estadoC8, estadoC9);
        }
        if (array.length == 10) {//ESTADO 9 => ESTADO 10
            estado9.map((item) => estado10.push(item))
            estado10.push(value);
            (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoC10.push(item))
            console.log('estadoC10 ~~~~~~~' + estadoC10);
            marcarRutaEstado(estadoC9, estadoC10);
        }
    }

    const agregarPosicionNueva = (posicionSiguiente) => {                          //change and passing parameter and ceros for value parameter
        //console.log('agregarPosicionNueva...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR

        const aa = [];
        const exists = getOc(posiciones, posicionSiguiente);

        if (exists == 0) {
            if (posiciones.length == 2) { //condicion de dos localidades unicamente inicialmente
                if (posiciones[1] == posicionSiguiente) {

                }
                else {
                    asociarArray(posiciones, posicionSiguiente);
                    asignarCaminoNumerico(posicionSiguiente);
                    posiciones.push(posicionSiguiente);
                    aa.push(posiciones);
                    console.log("posicion agregada =>" + posiciones[posiciones.length - 1]);
                    setEstadoPosiciones([...estadoPosiciones, aa]);
                }
            }
            else {
                if (posiciones[posiciones.length - 1] == posicionSiguiente) {
                }
                else {
                    asociarArray(posiciones, posicionSiguiente);
                    asignarCaminoNumerico(posicionSiguiente);
                    posiciones.push(posicionSiguiente);
                    console.log("posicion agregada =>" + posiciones[posiciones.length - 1]);
                    aa.push(posiciones);
                    setEstadoPosiciones(old => [...old, aa]);
                }
            }
        }
        else {
            //SI ES EL ULTIMO ELEMENTO SELECCIONADO DEBERIA PODERSE DAR DE BAJA o sea borrarse el ARRAY si es que le doy click de vuelta
            if (posicionSiguiente == posiciones[posiciones.length - 1]) {

            }

        }
        // console.log('posiciones==> ' + posiciones);
        //console.log('posicioNum==> ' + posicionesNumericas);
        // console.log("___________________________________________________");
    };


    let juego = realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0];
    console.log(juego);
    let posicionesTraidasdelaDB = juego.posiciones;
    console.log(posicionesTraidasdelaDB);
    posicionesTraidasdelaDB.map((item) => {
        if (item == "la casa") {
        }
        else {
            agregarPosicionNueva(item)
            console.log(item);
        }
    });

    const [juegoPosiciones, setJuego] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posiciones);
    const [juegoTiempo, setJuegoTiempo] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posicionesTiempo);

    //const [juegoLocalidades, setJuegoTiempo] = useState(realm.objects('Juego').filtered('id=' + route.params.juegoId.toString())[0].posiciones);
    let Xh = '170.37%';
    const fontSizeX = Dimensions.get('window').width/15;
  const fontSizeXX = Dimensions.get('window').width/25;
  let heigthD;
  let toppD='';
  let topClockD='';
  let topFlatlistD='';
  if (Dimensions.get('window').width > 440) {
    heigthD = '170%'; toppD ='110%'; topClockD='5%'; topFlatlistD='10%'
  }
  else {
    heigthD = '170%'; toppD='150%'; topClockD='16%'; topFlatlistD='22%'
  }
    let width = Dimensions.get('window').width;/////////
    let Xw = '71.8%';
    const pantallaJuego =() =>{
        if (Dimensions.get('window').width > 440) {
            return (
                <View style={{ height: Xh, width: Xw, left: '-25%', top: '-77%' }}>
                        {/* left:-32 */}
                        <View style={[styles.LocalidadTouchable, { top: '15%', left: '193%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center' ,color:'black'}}>
                                    {marcarNumeroLocalidad(9)}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-1%', left: '165%', zIndex: 12 }]}>

                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(10)}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-9.3%', left: '120%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(2)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-10%', left: '98%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(1)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-10%', left: '150.3%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(5)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-20%', left: '190%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(8)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-15%', left: '194%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(7)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-32.5%', left: '160.3%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(4)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-27.2%', left: '173.8%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(6)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-38.8%', left: '127%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(3)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            )
        }
        else {
            return (   
                <View style={{ height: Xh, width: Xw, left: '-25%', top: '2%' }}>
                        {/* left:-32 */}
                        <View style={[styles.LocalidadTouchable, { top: '-2%', left: '193%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center' ,color:'black'}}>
                                    {marcarNumeroLocalidad(9)}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-12%', left: '165%', zIndex: 12 }]}>

                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(10)}
                                </Text>
                            </TouchableOpacity>

                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-15%', left: '118%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(2)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-7%', left: '98%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(1)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-13.5%', left: '150.3%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(5)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-18%', left: '190%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(8)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-8%', left: '193%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(7)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-25.5%', left: '163.3%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(4)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-20.2%', left: '170.8%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(6)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={[styles.LocalidadTouchable, { top: '-27.8%', left: '127%', zIndex: 12 }]}>
                            <TouchableOpacity style={styles.buttonTouchable} onPress={() => { }}>
                                <Text style={{ fontSize: fontSizeX, textAlign: 'center',color:'black' }}>
                                    {marcarNumeroLocalidad(3)}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
            )
        }
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.inicio_View}>
                <View style={{ flex: 1, zIndex: 10,height: Dimensions.get('window').width, width: Dimensions.get('window').height, }}>
                    <Image style={{ top: toppD, left: '24.7%', opacity: 1, height: heigthD, width: Xw }} source={require('@img/testmandados_LaCasaModificado.jpg')} />
                    <>
                        {images.map((img, i) =>
                            <Image style={{
                                top: toppD, left: '24.7%', position: 'absolute', opacity: img.opacity,
                                height: heigthD, width: Xw
                            }} source={img.source} key={i} />
                        )
                        }
                    </>
                    {pantallaJuego()}
                    
                </View>
                <View style={{
                   width: '100%', zIndex: 10, top: topFlatlistD, alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3,
                    marginBottom: '0.5%', left: '-38.3%'
                }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <FlatList //lista de localidades en vista con sus nombres y ids y tiempo y posiciones de haber ido
                            //data={realm.objects('Juego')}

                            data={juegoPosiciones}
                            style={{ fontSize: 0, color: 'white', height: '40.2%', }}
                            renderItem={({ item }) =>
                                <View style={{ fontSize: Dimensions.get('window').width / 20, backgroundColor: '#DFDFE2', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center" }}>
                                    {/* {console.log(item), console.log(juego.findIndex((element) => element === item))} */}
                                    <View style={{ backgroundColor: '#AABECF' }} >
                                        <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.05, fontSize: Dimensions.get('window').width / 36, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                                            {(juegoPosiciones.findIndex((element) => element === item))}
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#AABECF' }} >
                                        <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.17, fontSize: Dimensions.get('window').width / 36, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                                            {item}

                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#AABECF' }} >
                                        <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.1, fontSize: Dimensions.get('window').width / 36, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                                            {juegoTiempo[(juegoPosiciones.findIndex((element) => element === item))]}

                                        </Text>
                                    </View>
                                </View>

                            }
                            keyExtractor={(item) => item.toString()}
                        />
                    </View>

                </View>
                <View style={{ position: 'relative', zIndex: 10, top: '10%', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, marginBottom: '1%', left: '-39%' }}>
                    {/* <Clock minuto={minutoMapa} segundo={segundoMapa} /> */}
                    <View style={{ zIndex: 1, alignContent: 'center', justifyContent: 'center', top: '1%' }}>
                    </View>
                </View>

                <View style={{ zIndex: 10, width:'106%',top: '18%', alignContent: 'center', justifyContent: 'center', flexDirection: 'row', borderRadius: 3, marginBottom: '1%', left: '-40.6%' }}>
                    <TouchableOpacity style={[styles.inicio_Button,]} onPress={() => { navigation.navigate('Puntuaciones'); }}>
                        <Text style={styles.inicio_Text}>Volver</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.RevisionGeneral_Button_Calle, { top: '5%', zIndex: 10 }]}>
                </View>
                <View styles={{}}>
                    <Modal
                        animationType="none"
                        transparent={true}
                        visible={modalVisible}
                        onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
                    >
                        <View style={{ zIndex: 10, left: '1%', top: '100%', transform: [{ rotate: '90 deg' }], backgroundColor: 'white' }}>
                            <View style={{ backgroundColor: "#AABECF", padding: '5%', borderRadius: 3 }}>
                                <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                                <TouchableHighlight
                                    style={{ backgroundColor: "#34495E" }}
                                    onPress={() => { setModalVisible(modalVisible => !modalVisible); }}
                                >
                                    <Text style={{ color: 'white' }}>continuar</Text>
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
    LocalidadTouchable: {
        //backgroundColor: '#B5B5BA',
        backgroundColor:'#00000000',
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        //borderRadius: (Dimensions.get('window').width / 12) / 2,
         height: (Dimensions.get('window').width / 10),
          width: (Dimensions.get('window').width / 10),
    },
    imagenMapa: { top: '150%', left: '24.7%', opacity: 1 },
    RevisionGeneral_Button_info: {
        backgroundColor: 'lightblue', alignContent: 'center',
        flexDirection: 'row',
       // borderRadius: (Dimensions.get('window').width / 12) / 2,
        
        height: (Dimensions.get('window').width / 10), 
        width: (Dimensions.get('window').width / 10),
        top: '1%', left: '3%',
    },
    buttonTouchable: {
        //borderRadius: (Dimensions.get('window').width / 12) / 2,
         height: (Dimensions.get('window').width / 10), width: (Dimensions.get('window').width / 10),
    },
    RevisionGeneral_Button_Calle: {
        alignContent: 'center',
        flexDirection: 'row',
        transform: [{ rotate: '66 deg' }],
        height: '17%', width: '1%',
        left: '22%',
    },
    inicio_View: {
        //flexDirection:'column',
        backgroundColor: '#DFDFE2',
        flex: 1,                                          // volver a colocar
        alignContent: 'center', justifyContent: 'center',
        transform: [{ rotate: '90 deg' }],
        //width:Dimensions.get('window').height,
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').height,
        // height:Dimensions.get('window').width,
    },
    inicio_Text: {
        fontSize: Dimensions.get('window').width / 14,
        alignContent: 'center', justifyContent: 'center',
        alignItems: 'center', textAlign: 'center',
    },
    inicio_Title: {
        fontSize: Dimensions.get('window').width / 14,
        alignContent: 'center', justifyContent: 'center',
        backgroundColor: 'blue', textAlign: 'center',
    },
    inicio_Logo: {
        fontSize: Dimensions.get('window').width / 14,
        position: 'relative',
        alignContent: 'center', justifyContent: 'center',
        textAlign: 'center',
    },
    inicio_Button: {
        fontSize: Dimensions.get('window').width / 14,
        borderRadius: 10,

        width: '95%',
        backgroundColor: '#AABECF',
        padding: '1%',
        elevation: 2,
        justifyContent: "center", alignItems: "center",
        textAlign: 'center',
    },
    inicio_ButtonTime: {
        fontSize: Dimensions.get('window').width / 14,
        borderRadius: 10,
        borderColor: 'grey',
        borderWidth: 1,
        width: '100%',
        backgroundColor: '#AABECF',
        padding: '6%',
        elevation: 2,
        justifyContent: "center", alignItems: "center",
        textAlign: 'center',
    },
});

export default Juego_Mapa_Recorrido;