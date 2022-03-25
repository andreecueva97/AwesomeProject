import React, { useState, useEffect } from 'react';
import { Image, StyleSheet, Dimensions, Text, View, TouchableHighlight, Modal, Alert, FlatList, SafeAreaView } from 'react-native';
import Clock from '../components/Clock';
import { BaseButton, TouchableOpacity } from 'react-native-gesture-handler';
import realm from '../REALMDB';
const Juego_Mapa = ({ navigation, route }) => {
  //const {navigation} = this.props;
  const [minutoMapa, setMinutoMapa] = useState(0);//era 10
  const [segundoMapa, setSegundoMapa] = useState(0);
  const { user, userIdd } = route.params;
  //console.log(JSON.stringify(user));
  /////////////////////////////////////////////////////////////////////////////////////////////////////console.log('juegomapa mongoo '+ userIdd);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisible2, setModalVisible2] = useState(false);
  const [modalVisible3, setModalVisible3] = useState(false);
  
  const [data_Mongo_One_User, setOneUsuarioPorFetch] = useState();
  const [data_Mongo_Juegos,setTodosLosJuegosPorFetch]= useState();
  
  useEffect(() => {
    const timerId = setInterval(() => {
      if (segundoMapa < 59) {
        setSegundoMapa(S => S + 1);
      }
      else {
        setMinutoMapa(minutoMapa => minutoMapa + 1);
        setSegundoMapa(0)
      }
      
    }, 1000)
    return () => clearInterval(timerId);
  }, [segundoMapa, minutoMapa]);
  let timePosition = [];
  const [posiciones, setPosiciones] = useState(['la casa']);
  const [estado0, setEstado0] = useState([]); const [estado1, setEstado1] = useState([]); const [estado2, setEstado2] = useState([]); const [estado3, setEstado3] = useState([]);
  const [estado4, setEstado4] = useState([]); const [estado5, setEstado5] = useState([]); const [estado6, setEstado6] = useState([]); const [estado7, setEstado7] = useState([]);
  const [estado8, setEstado8] = useState([]); const [estado9, setEstado9] = useState([]); const [estado10, setEstado10] = useState([]); const [estado11, setEstado11] = useState([]);
  const [estadoT0, setEstadoT0] = useState([]); const [estadoT1, setEstadoT1] = useState([]); const [estadoT2, setEstadoT2] = useState([]); const [estadoT3, setEstadoT3] = useState([]);
  const [estadoT4, setEstadoT4] = useState([]); const [estadoT5, setEstadoT5] = useState([]); const [estadoT6, setEstadoT6] = useState([]); const [estadoT7, setEstadoT7] = useState([]);
  const [estadoT8, setEstadoT8] = useState([]); const [estadoT9, setEstadoT9] = useState([]); const [estadoT10, setEstadoT10] = useState([]); const [estadoT11, setEstadoT11] = useState([]);
  const [estadoC0, setEstadoC0] = useState([]); const [estadoC1, setEstadoC1] = useState([]); const [estadoC2, setEstadoC2] = useState([]); const [estadoC3, setEstadoC3] = useState([]);
  const [estadoC4, setEstadoC4] = useState([]); const [estadoC5, setEstadoC5] = useState([]); const [estadoC6, setEstadoC6] = useState([]); const [estadoC7, setEstadoC7] = useState([]);
  const [estadoC8, setEstadoC8] = useState([]); const [estadoC9, setEstadoC9] = useState([]); const [estadoC10, setEstadoC10] = useState([]); const [estadoC11, setEstadoC11] = useState([]);
  const [posicionesNumericas, setPosicionesNumericas] = useState([0]);
  //[['la casa'],[],[],[],[],[],[],[],[],[],[]]
  const [estadoPosiciones, setEstadoPosiciones] = useState([['la casa']]);

  //console.log(estadoPosiciones);
  const [zapatero, setZapatero] = useState('   ');

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
  const empty = arr => arr.length = 0;

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
  const [juegoId, setJuegoId] = useState(0);
  useEffect(() => {
    // action on update of userId
    setJuegoId(realm.objects('Juego').length + 1);

  }, [juegoId]);
  const calcularPuntaje = () => {
    let puntajeBase = 0;
    if (posicionesNumericas[1] == 5) {
      puntajeBase = puntajeBase + 3;      console.log(posicionesNumericas[1]);
    }
    if (posicionesNumericas[2] == 10 || posicionesNumericas[2] == 2) {
      puntajeBase = puntajeBase + 3;      console.log(posicionesNumericas[2]);
    }
    if (posicionesNumericas[3] == 9 || posicionesNumericas[3] == 1) {
      puntajeBase = puntajeBase + 2;      console.log(posicionesNumericas[3]);
    }
    if (posicionesNumericas[4] == 7) {
      puntajeBase = puntajeBase + 1;      console.log(posicionesNumericas[4]);
    }
    if (posicionesNumericas[5] == 6) {
      puntajeBase = puntajeBase + 1;      console.log(posicionesNumericas[5]);
    }
    if (posicionesNumericas[6] == 3) {
      puntajeBase = puntajeBase + 1;      console.log(posicionesNumericas[6]);
    }
    if (posicionesNumericas[7] == 1 || posicionesNumericas[7] == 9) {
      puntajeBase = puntajeBase + 1;      console.log(posicionesNumericas[7]);
    }
    if (posicionesNumericas[8] == 2 || posicionesNumericas[8] == 10) {
      puntajeBase = puntajeBase + 2;      console.log(posicionesNumericas[8]);
    }
    if (posicionesNumericas[9] == 4) {
      puntajeBase = puntajeBase + 3;      console.log(posicionesNumericas[9]);
    }
    if (posicionesNumericas[10] == 8) {
      puntajeBase = puntajeBase + 3;      console.log(posicionesNumericas[10]);
    }
    return puntajeBase;
  }

  const finalizarJuego = () => {
    if (posicionesNumericas.length == 11) {
      setModalVisible2(!modalVisible2);
    }
    else {
      setModalVisible3(!modalVisible3);
    }
  };
  const obtenerOneUsuariosPorFetch = async () =>{
    const dataExtraida = 
      await 
      fetch('https://backend-testmandados.herokuapp.com/api/users/'+userIdd,{
        method:'GET',
      })
      .then(response => response.json());
    setOneUsuarioPorFetch(dataExtraida);
  }
 
  const obtenertodosLosJuegosPorFetch = async () =>{
    const dataExtraida =
      await
      fetch('https://backend-testmandados.herokuapp.com/api/juegos',{
        method:'GET',
      })
      .then(response => response.json());
      setTodosLosJuegosPorFetch(dataExtraida.length);
  }
  useEffect(() => {
    obtenerOneUsuariosPorFetch();
    obtenertodosLosJuegosPorFetch();
  }, []);
 
  const creacionJuegoPorFetch = async (lastt,puntaje,data_Mongo_One_User,posiciones,timePosition,posicionesNumericas) =>{
   
      await
      fetch('https://backend-testmandados.herokuapp.com/api/juegos',{
        method:'POST',
        headers:{
          Accept:'application/JSON',
          'Content-Type':'application/JSON',
        },
        body:JSON.stringify({
          id: lastt.toString(),
          tipo: puntaje,
          user:data_Mongo_One_User,
          posiciones:posiciones,
          posicionesTiempo:timePosition,
          posicionesNumericas:posicionesNumericas,
        })
      })
      .then(response=>response.text())
      .then(response => console.log('CREACION JUEGO FETCH'+response))
      .catch(e=> console.log(e));
    
  }
  
  const agregarJuego_User = () => {
    if (posicionesNumericas.length == 11) {

      estadoT0.map((item) => timePosition.push(item));
      estadoT1.map((item) => timePosition.push(item));
      estadoT2.map((item) => timePosition.push(item));
      estadoT3.map((item) => timePosition.push(item));
      estadoT4.map((item) => timePosition.push(item));
      estadoT5.map((item) => timePosition.push(item));
      estadoT6.map((item) => timePosition.push(item));
      estadoT7.map((item) => timePosition.push(item));
      estadoT8.map((item) => timePosition.push(item));
      estadoT9.map((item) => timePosition.push(item));
      estadoT10.map((item) => timePosition.push(item));
      //   realm.write(() => {
      //     realm.deleteAll();
      // });
      let last = realm.objects('Juego').length + 1;
      let puntaje = calcularPuntaje();
      realm.write(() => {
        realm.create('Juego', {
          id: last,
          tipo: puntaje,     //posiciones de localidades en la partida
          user: route.params.user,
          posiciones: posiciones,
          posicionesTiempo: timePosition,
          posicionesNumericas: posicionesNumericas,
        });
      });
      console.log('Juego agregado');
      console.log(realm.objects('Juego'));
      
      creacionJuegoPorFetch(data_Mongo_Juegos+1,puntaje,data_Mongo_One_User[0],posiciones,timePosition,posicionesNumericas);
     
      navigation.navigate('Revision_General', { juegoId: (data_Mongo_Juegos+1) });

    }
    else {
      navigation.navigate('Inicio');
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
  const vueltaCaminoEstadoAnterior = (estadoAnterior) => {
    for (let index = 0; index < estadoAnterior.length; index++) {
      const element = estadoAnterior[index];
      funca(element);
      //console.log(element);
    }
  }
  const popEstado = (array) => {
    let arrayEstados = [estado0,estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9,estado10];
    let arrayEstadosT = [estadoT0,estadoT1,estadoT2,estadoT3,estadoT4,estadoT5,estadoT6,estadoT7,estadoT8,estadoT9,estadoT10];
    let arrayEstadosC = [estadoC0,estadoC1,estadoC2,estadoC3,estadoC4,estadoC5,estadoC6,estadoC7,estadoC8,estadoC9,estadoC10];
    if (array.length - 1 == 1) {//PASA DEL ESTADO 0 => ESTADO 1
      empty(estado0);
      empty(estado1);
      empty(estadoT0);
      empty(estadoT1);
      empty(estadoC1);
      setImages(images => images.map(el => (
        { ...el, opacity: 0 }
      )));
    }
    if (array.length - 1 >= 2) {//ESTADO 1 => ESTADO 2  //estado 2 => estado 3 // estado i => estado i+1
      empty(arrayEstados[array.length-1]);
      empty(arrayEstadosT[array.length-1]);
      empty(arrayEstadosC[array.length-1]);
      setImages(images => images.map(el => (
        { ...el, opacity: 0 }
      )));
      vueltaCaminoEstadoAnterior(arrayEstadosC[array.length-2]);
    }
    console.log(estado1 + '=>' + estadoT1);
    console.log(estado2 + '=>' + estadoT2);
    console.log(estado3 + '=>' + estadoT3);
    console.log(estado4 + '=>' + estadoT4);
    console.log(estado5 + '=>' + estadoT5);
    console.log(estado6 + '=>' + estadoT6);
    console.log(estado7 + '=>' + estadoT7);
    console.log(estado8 + '=>' + estadoT8);
    console.log(estado9 + '=>' + estadoT9);
    console.log(estado10 + '=>' + estadoT10);
  }
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
      //console.log(element);
    }
  }

  const asociarArray = (array, value) => {
    let arrayEstados = [estado0,estado1,estado2,estado3,estado4,estado5,estado6,estado7,estado8,estado9,estado10];
    let arrayEstadosT = [estadoT0,estadoT1,estadoT2,estadoT3,estadoT4,estadoT5,estadoT6,estadoT7,estadoT8,estadoT9,estadoT10];
    let arrayEstadosC = [estadoC0,estadoC1,estadoC2,estadoC3,estadoC4,estadoC5,estadoC6,estadoC7,estadoC8,estadoC9,estadoC10];
    if (array.length == 1) {//PASA DEL ESTADO 0 => ESTADO 1
      estado0.push('la casa');
      estado1.push('casa');
      estado1.push(value);

      estadoT0.push(minutoMapa.toString() + ':' + segundoMapa.toString());
      estadoT1.push(minutoMapa.toString() + ':' + segundoMapa.toString());
      // estadoC1.push(matriz[0][asignarNumero(value)].posicion);
      (matriz[0][asignarNumero(value)].posicion).map((item) => estadoC1.push(item))
      console.log('estadoC1 ~~~~~~~' + estadoC1);
      console.log(estadoC1);
      for (let index = 0; index < estadoC1.length; index++) {
        const element = estadoC1[index];
        funca(element);
        //console.log(element);
      }
      //console.log(matriz[0][0].posicion)
    }
    if (array.length >= 2) {//ESTADO 1 => ESTADO 2
      let estadoAnterior =arrayEstados[array.length-1];
      let estadoActual = arrayEstados[array.length];
      let estadoActualC =arrayEstadosC[array.length];
      let estadoAnteriorC =arrayEstadosC[array.length-1];
      console.log('estadoanterior');
      console.log(estadoAnterior);
      estadoAnterior.map((item) => estadoActual.push(item))
      estadoActual.push(value);
      (arrayEstadosT[array.length]).push(minutoMapa.toString() + ':' + segundoMapa.toString());
      //estadoC2.push(matriz[posicionesNumericas[array.length-1]][asignarNumero(value)].posicion);
      (matriz[posicionesNumericas[array.length - 1]][asignarNumero(value)].posicion).map((item) => estadoActualC.push(item))
      console.log('estadoActual ~~~~~~~' + estadoActualC);
      marcarRutaEstado(estadoAnteriorC, estadoActualC);
    }
  }

  const funcionnOpacity2 = (posicionSiguiente) => {                          //change and passing parameter and ceros for value parameter
    console.log('funcionOpacity2...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR
    const aa = [];
    const exists = getOc(posiciones, posicionSiguiente);
    // console.log('veces repetidas posicionSiguiente:');
    // console.log(exists);
    if (exists == 0) {
      if (posiciones.length == 2) { //condicion de dos localidades unicamente inicialmente
        if (posiciones[1] == posicionSiguiente) {

        }
        else {
          asociarArray(posiciones, posicionSiguiente);
          asignarCaminoNumerico(posicionSiguiente);
          posiciones.push(posicionSiguiente);      //agregar posicion
          aa.push(posiciones);
          setEstadoPosiciones([...estadoPosiciones, aa]);
        }
      }
      else {
        if (posiciones[posiciones.length - 1] == posicionSiguiente) {
        }
        else {
          asociarArray(posiciones, posicionSiguiente);
          asignarCaminoNumerico(posicionSiguiente);
          posiciones.push(posicionSiguiente);          //agregar posicion
          console.log("posicion agregada =>" + posiciones[posiciones.length - 1]);
          aa.push(posiciones);
          setEstadoPosiciones(old => [...old, aa]);
        }
      }
    }
    else {
      //SI ES EL ULTIMO ELEMENTO SELECCIONADO DEBERIA PODERSE DAR DE BAJA o sea borrarse el ARRAY si es que le doy click de vuelta
      if (posicionSiguiente == posiciones[posiciones.length - 1]) {
        console.log('posicion final y nueva son iguales:');
        console.log('posicionFinal ==>' + posiciones[posiciones.length - 1]);
        console.log('posicionSiguiente ==>' + posicionSiguiente);
        popEstado(posiciones);
        posiciones.pop();
        posicionesNumericas.pop();
        console.log('posicionesActualizadas==>' + posiciones);
        estadoPosiciones.pop();
      }

    }
    console.log('posiciones==> ' + posiciones);
    console.log('posicioNum==> ' + posicionesNumericas);
    console.log(estadoPosiciones);
    console.log("___________________________________________________");
  };
    
  let Xh = '170.37%';
  const fontSizeX = Dimensions.get('window').width / 15;
  const fontSizeXX = Dimensions.get('window').width / 25;
  let heigthD;
  let toppD = '';
  let topClockD = '';
  let topFlatlistD = '';
  if (Dimensions.get('window').width > 440) {
    heigthD = '220%'; toppD = '115%'; topClockD = '5%'; topFlatlistD = '10%'
  }
  else {
    heigthD = '170%'; toppD = '142%'; topClockD = '16%'; topFlatlistD = '16%'
  }
  let width = Dimensions.get('window').width;
  let Xw = '71.8%';

  const flatlistLocalidades = () => {
    let heightFlatlist = '85.2%';
    let fontSizeFlatlistText = width / 25;
    let leftId = '0%';
    if (Dimensions.get('window').width > 440) {
      heightFlatlist= '100%';
            fontSizeFlatlistText= Dimensions.get('window').width/30;
            leftId='20%';
    }
    else if(Dimensions.get('window').width == 360){
      fontSizeFlatlistText = width / 32;
    }
    else{
      heightFlatlist= '90.2%';
    }
    
    return (
        <View style={{ alignContent: 'center', justifyContent: 'center', flexDirection: 'row', transform: [{ rotate: '90 deg' }], }}>
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <FlatList //lista de localidades en vista con sus nombres y ids y tiempo y posiciones de haber ido
              data={posiciones}//data={realm.objects('Juego')}
              style={{ fontSize: 0, color: 'white', height: heightFlatlist }}
              renderItem={({ item }) =>
                <View style={{ fontSize: fontSizeXX, backgroundColor: '#DFDFE2', justifyContent: 'space-between', alignItems: "center", flexDirection: 'row', justifyContent: "center" }}>
                  {/* {console.log(item), console.log(juego.findIndex((element) => element === item))} */}
                  <View style={{ backgroundColor: 'white',alignItems:'center',justifyContent: 'center'}} >
                    <Text style={{ left:leftId,textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.1, fontSize: fontSizeFlatlistText, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                      {/* {(juegoPosiciones.findIndex((element) => element === item))} */}{posiciones.findIndex(element => element === item)}{'  '}
                    </Text>
                  </View>
                  <View style={{ backgroundColor: 'white' }} >
                    <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.19, fontSize: fontSizeFlatlistText, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                      {item}
                    </Text>
                  </View>
                  <View style={{ backgroundColor: 'white' }} >
                    <Text style={{ textAlign: 'center', justifyContent: "center", alignItems: "center", width: Dimensions.get('window').width * 0.1, fontSize: fontSizeFlatlistText, color: '#371B1F', top: '10%', backgroundColor: '#DFDFE2' }}>
                     {/* {juegoTiempo[(juegoPosiciones.findIndex((element) => element === item))]} */}{timePosition[posiciones.findIndex((element) => element === item)]}{'  '}
                   </Text>
                  </View>
                </View>
              }
              keyExtractor={(item) => item.toString()}
            />
          </View>
        </View>
      );
    
    
  }
  const pantallaJuego = () => {
    let arrayNameLocalidades =['almacen','cafe','panaderia','oficina','amiga','correo','libreria','estacion','kiosko','zapatero'];
    var viewsPantallaJuego =[];
    let arrayNumberLocalidades =[1,2,3,5,4,10,6,8,7,9];
    if (Dimensions.get('window').width > 440) {
      let arrayTopLocalidades =['5%','12%','9%','14%','15%','8%','4%','8%','-1%','-10%'];
      let arrayLeftLocalidades=['60%','68%','34%','55%','46%','76%','31%','53%','38%','70%'];
      for (let i = 0; i < 10; i++) {
        viewsPantallaJuego.push(
          <View style={[styles.buttonLocalidad, { top: arrayTopLocalidades[i], left: arrayLeftLocalidades[i],}]} key={i}>
              <TouchableOpacity style={[styles.circuleButton]} onPress={() => { funcionnOpacity2(arrayNameLocalidades[i]) }} key={i}>
                <Text style={{ transform: [{ rotate: '90 deg' }], fontSize: fontSizeX, textAlign: 'center', color: 'black' }}>{marcarNumeroLocalidad(arrayNumberLocalidades[i])}</Text>
              </TouchableOpacity>
            </View>
        );
      }
    }
    else{
      let arrayTopLocalidades =['-5%','0%','0%','10%','15%','10%','10%','12%','10%','0%'];
      let arrayLeftLocalidades=['60%','70%','25%','53%','43%','80%','23%','50%','30%','75%'];
      for (let i = 0; i < 10; i++) {
        viewsPantallaJuego.push(
          <View style={[styles.buttonLocalidad, { top: arrayTopLocalidades[i], left: arrayLeftLocalidades[i], }]} key={i}>
              <TouchableOpacity style={[styles.circuleButton,{}]} onPress={() => { funcionnOpacity2(arrayNameLocalidades[i]) }} key={i}>
                <Text style={{ transform: [{ rotate: '90 deg' }], fontSize: fontSizeX, textAlign: 'center', color: 'black' }}>{marcarNumeroLocalidad(arrayNumberLocalidades[i])}</Text>
              </TouchableOpacity>
            </View>
        );
      }
    }
    
    return (
        <View style={{zIndex: 5, flex: 1, flexDirection: 'column',top: 0, alignContent: 'center', justifyContent: 'center', marginBottom: 0, left: 0,}}>
          {/* fontSize fontSizeX */}
          {viewsPantallaJuego}
        </View>
      );
  }
  const mapa = () => {
    let stylesInMapa_Image =null;
    let stylesInMapa_Images =null;
    //console.log(Dimensions.get('window').width);
    if (Dimensions.get('window').width > 440) {
      stylesInMapa_Image=styles.image440;
     stylesInMapa_Images=styles.images440;
    }
    else if (Dimensions.get('window').width == 360) {
      stylesInMapa_Image=styles.image360;
      stylesInMapa_Images=styles.images360;
    }
    else {
     stylesInMapa_Image=styles.imageOther;
     stylesInMapa_Images=styles.imagesOther;
    }
    return (
        <View style={{ alignContent: 'center', justifyContent: 'center', marginBottom: 0, flex: 1 }}>
          <Image style={[stylesInMapa_Image]}
            source={require('@img/testmandados_LaCasaModificado-modified.png')} />
          <>
            {/* {images.map((img) => 
              <Image style=
                {[styles.imagesOther,
                  {opacity: img.opacity}
                ]} source={img.source} /> 
            )  
            } */}
            {images.map((img, i) => <Image style={[stylesInMapa_Images,{opacity: img.opacity}]} source={img.source} key={i} /> )  }
          </>
        </View>
    )
    
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <View style={{ flex: 3, flexDirection: 'row-reverse' }}>
          <View style={{ top: 0, alignContent: 'center', justifyContent: 'center', marginBottom: 0, left: 0, flex: 2 }}>
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', textAlign: 'center', }}>
              <Clock minuto={minutoMapa} segundo={segundoMapa} />
            </View>

          </View>
          <View style={{ top: 0, alignContent: 'center', justifyContent: 'center', marginBottom: 0, left: 0, flex: 5 }}>
            <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', textAlign: 'center' }}>
              {flatlistLocalidades()}
            </View>

          </View>
          <View style={{ top: 0, alignContent: 'center', justifyContent: 'center', marginBottom: 0, left: 0, flex: 2, }}>

          <View style={{ flex: 2,backgroundColor: '#DFDFE2' ,flexDirection:'row-reverse'}}>
          <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', textAlign: 'center',backgroundColor:'#DFDFE2' }}>
              <View style={{ alignContent: 'center', justifyContent: 'center', textAlign: 'center', flexDirection: 'row-reverse', }}>
                <View style={{width:'120%', alignContent: 'center', justifyContent: 'center', textAlign: 'center',marginHorizontal:'-37%' ,transform: [{ rotate: '90 deg' }],}}>
                  <TouchableOpacity style={[styles.inicio_Button, { backgroundColor: '#AABECF', }]} onPress={() => { finalizarJuego();}}>
                    <Text style={[styles.inicio_Text, {fontSize: Dimensions.get('window').width / 30,}]}>Terminar</Text>
                  </TouchableOpacity>
                </View>
                <View style={{width:'120%', alignContent: 'center', justifyContent: 'center', textAlign: 'center',marginHorizontal:'-37%',transform: [{ rotate: '90 deg' }] }}>
                  <TouchableOpacity style={[styles.inicio_Button, { backgroundColor: '#AABECF',  }]} onPress={() => {setModalVisible(!modalVisible);}}>
                  <Text style={[styles.inicio_Text, {fontSize: Dimensions.get('window').width / 32,}]}>Informacion</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
               
                    
                </View>
            
          </View>
        </View>


        <View style={{ flex: 10, backgroundColor:'white'}}>
          <View style={{ alignContent: 'center', justifyContent: 'center', marginBottom: 0, left: '-10%', flex: 1 }}>
            {mapa()}
          </View>
          <View style={{ alignContent: 'center', justifyContent: 'center', marginBottom: 0, position: 'absolute', width: '100%', height: '100%' }}>
            {pantallaJuego()}
          </View>

        </View>
        <View styles={{}}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { Alert.alert("Modal fue cerrado."); setModalVisible(modalVisible => !modalVisible); }}
          >
            <View style={{ zIndex: 10, left: '2%', top: '43%', transform: [{ rotate: '90 deg' }], backgroundColor: 'white' }}>
              <View style={{ backgroundColor: "#AABECF", padding: 20, borderRadius: 3 }}>
                <Text style={{ fontSize: width / 33 }}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas:
                  almacen, cafe, panaderia, oficina, casa de amiga, estacion, correo, zapatero, kiosko, libreria.</Text>
                <TouchableHighlight
                  style={{ backgroundColor: "#34495E" }}
                  onPress={() => { setModalVisible(modalVisible => !modalVisible) }}
                >
                  <Text style={{ color: 'white', fontSize: width / 33 }}>continuar</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <View styles={{}}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible2}
            onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible2(modalVisible2 => !modalVisible2) }}
          >
            <View style={{ flex: 1, zIndex: 10, justifyContent: "center", alignItems: "center", transform: [{ rotate: '90 deg' }], }}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText,{fontSize: width / 33}]}>Ha finalizado el recorrido, desea terminar?</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableHighlight
                  style={[styles.button, styles.buttonClose, { backgroundColor: '#AABECF',marginHorizontal:'10%' }]}
                  onPress={() => { setModalVisible2(modalVisible2 => !modalVisible2); agregarJuego_User() }}
                >
                  <Text style={[styles.textStyle,{fontSize: width / 33}]}>continuar</Text>
                </TouchableHighlight>
                <Text></Text>
                <TouchableHighlight
                  style={[styles.button, styles.buttonClose, { backgroundColor: '#AABECF',marginHorizontal:'10%' }]}
                  onPress={() => { setModalVisible2(modalVisible2 => !modalVisible2); }}
                >
                  <Text style={[styles.textStyle,{fontSize: width / 33}]}>cancelar</Text>
                </TouchableHighlight>
                </View>
               
              </View>
            </View>
          </Modal>
        </View>
        <View styles={{}}>
          <Modal
            animationType="none"
            transparent={true}
            visible={modalVisible3}
            onRequestClose={() => { Alert.alert("Modal has been closed."); setModalVisible3(modalVisible3 => !modalVisible3) }}
          >
            <View style={{ flex: 1, zIndex: 10, justifyContent: "center", alignItems: "center", transform: [{ rotate: '90 deg' }], }}>
              <View style={styles.modalView}>
                <Text style={[styles.modalText,{fontSize: width / 30}]}> Se le informa que no marco todas las localidades del recorrido y que va a perder todo lo que hizo, desea terminar?</Text>
                <View style={{flexDirection:'row'}}>
                <TouchableHighlight
                  style={[styles.button, styles.buttonClose, { backgroundColor: '#AABECF' ,marginHorizontal:'10%'}]}
                  onPress={() => { setModalVisible3(modalVisible3 => !modalVisible3); navigation.navigate('Inicio') }}
                >
                  <Text style={[styles.textStyle,{fontSize: width / 33}]}>Salir del Juego</Text>
                </TouchableHighlight>
                <Text></Text>
                <TouchableHighlight
                  style={[styles.button, styles.buttonClose, { backgroundColor: '#AABECF', marginHorizontal:'10%'}]}
                  onPress={() => { setModalVisible3(modalVisible3 => !modalVisible3); }}
                >
                  <Text style={[styles.textStyle,{fontSize: width / 33}]}>cancelar</Text>
                </TouchableHighlight>
                </View>
                
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView >
  )

}


const styles = StyleSheet.create({
     image440:{opacity: 1, alignContent: 'center', justifyContent: 'center',width: '81%', height: '100%', left: '18%'},
       images440:{ position: 'absolute', width: '81%', height: '100%', left: '18%' },
       image360:{opacity: 1, alignContent: 'center', justifyContent: 'center',maxWidth: '110%', maxHeight: '100%'},
       images360:{ position: 'absolute',width: '110%', height: '100%' },
      imageOther:{opacity: 1, alignContent: 'center', justifyContent: 'center', maxWidth: '110%', maxHeight: '100%'},
    imagesOther:{ position: 'absolute', maxWidth: '110%', maxHeight: '100%' },
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
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
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
  circuleButton: {
    //borderRadius: (Dimensions.get('window').width / 10) / 2, 
    alignContent: 'center', justifyContent: 'center',
    height: (Dimensions.get('window').width / 7),
    width: (Dimensions.get('window').width / 7),
    //backgroundColor: 'blue'
  },

  buttonLocalidad: {//se refiere a el estilo de los botones de las localidades
    //backgroundColor: '#B5B5BA', //color gris botones de localidades
    backgroundColor: '#00000000',
    alignContent: 'center', justifyContent: 'center',
    //flexDirection: 'row',
    //borderRadius: (Dimensions.get('window').width / 10) / 2, 
    height: (Dimensions.get('window').width / 10),
    width: (Dimensions.get('window').width / 10), zIndex: 12,
  },
  RevisionGeneral_Button_Calle: {
    alignContent: 'center',
    flexDirection: 'row',
    transform: [{ rotate: '66 deg' }],
    height: '16.5%', width: '1%',
    left: '22%',
  },
  inicio_View: {
    //flexDirection:'column',
    backgroundColor: '#DFDFE2',
    //backgroundColor:'blue',
    flex: 1,                                          // volver a colocar
    alignContent: 'center', justifyContent: 'center',
    transform: [{ rotate: '90 deg' }],
    //width:Dimensions.get('window').height,
    height: Dimensions.get('window').width, width: Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text: {
    fontSize: Dimensions.get('window').width / 20, //backgroundColor: 'yellow',
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center', textAlign: 'center',
  },
  inicio_Title: {
    fontSize: Dimensions.get('window').width / 14,
    alignContent: 'center', justifyContent: 'center',
    //backgroundColor: 'blue', 
    textAlign: 'center',
  },
  inicio_Logo: {
    fontSize: Dimensions.get('window').width / 14,
    position: 'relative',
    alignContent: 'center', justifyContent: 'center',
    textAlign: 'center',
  },
  inicio_Button: {
    //fontSize: Dimensions.get('window').width / 30,
    borderRadius: 10,
    //width: '106%',
    //backgroundColor: '#AABECF',
    backgroundColor: 'blue',
    padding: 8,
    elevation: 2,
    justifyContent: "center", alignItems: "center",
    textAlign: 'center',
  },
  juegoPI:{},
});

export default Juego_Mapa;