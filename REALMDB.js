'use strict';
import Realm from 'realm';

export class Juego extends Realm.Object {}//DONACION
Juego.schema = {
    name: 'Juego',
    properties: {
      id: 'int',
      tipo:'int',     //posiciones de localidades en la partida
      user:'User',
      posiciones:'string[]',
      posicionesTiempo:'string[]',
      posicionesNumericas:'int[]'
    },
};
export class User extends Realm.Object {}//PERSONS  USERS
User.schema = {
    name: 'User',
    properties: {
      id: 'int',
      name: 'string',
      //apellido:'string',//sacar
      edad:'string',
      //dni:'string',//sacar
      telefono:'string',//telefono
      educacion:'string',//educacion
      estadoCivil:'string',//estado civil
      genero:'string',//sexo/genero




      //listDogs:'string[]',
      //listJuegos:{type: 'list', objectType: 'Juego'},
     // imagen:'Imagee'       // una persona loggeada debe tener una foto
    },
};
export const version3 ={
  path:'version7.realm',
  schema:[User,Juego],
  schemaVersion:5,
};
export default new Realm(version3);
// export class Imagee extends Realm.Object {}//DOG
// Imagee.schema = {
//     name: 'Imagee',
//     properties: {
//       height: 'int', 
//       mime: 'string', 
//       uri: 'string', 
//       width:'int'
//     },
// };
///////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

//---------------------------------
//---------------------------------
// export class UserLogin extends Realm.Object {}//PERSONS
// Persons.schema = {
//     name: 'Persons',
    
//     properties: {
//             id: 'int',
//             name: 'string',
//             apellido:'string',
//             edad:'int',
//             dni:'int',
//             //listDogs:'string[]',
//             //listJuegos:{type: 'list', objectType: 'Juego'},/// es mejor tener juego asociados a un jugador porque un jugador puede tener varios Juegos realizados. En caso de querer los juegos
//             //que realizo un jugador miro los juegos y filtro dentro del mismo por persona.dni
//     },
// };

//////////////////////////////////////

///////////////////////////////////////
// export const Schemaa = [Person, Dog];
// export const databaseOptions = {
//   path:'UserDataba232s2e22.realm',
//   schema: Schemaa,
//   //
// };

// export const heheh=[Dogo,Persons,Donacion,PersonsLogin,Imagee,Dogos];
// export const heeeqSchema ={
//   path:'ezewweresafdawewfsadfafadfewrfdsfasdfawe12134dfdsD123213FSADSFADSwe.realm',
//   schema: heheh,
//   schemaVersion:222,
// };

//export default new Realm(heeeqSchema);
//export default new Realm({schema: [AppSetting, Gps, ...], schemaVersion: 0});

//export default new Realm({schema:[User,Juego],schemaVersion:3});