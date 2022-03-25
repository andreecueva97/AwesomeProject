const { Parser, transforms: { unwind } } = require('json2csv');
const fs = require('fs');

// valores que tendra cada columna aca podria deberia haber un FETCH llamando al servidor donde esta la BD
const myCars2 = [
    {
        "_id":"62239fc4b3db1ecc349e87b1",
        "id":1,
        "tipo":28,
        "user":
        {
            "id":2,
            "name":"victoria",
            "edad":"26",
            "telefono":"12434332422423432",
            "educacion":"secundaria",
            "estadoCivil":"casada",
            "genero":"femenino",
            "_id":"62239fc4b3db1ecc349e87b2"
        }
    ,
        "posiciones":[],
        "posicionesTiempo":[],
        "posicionesNumericas":[],
        "__v":0
    },{
        "_id":"6223a41ebe76167acb8950b5",
        "id":4,
        "tipo":28,
        "user":
            {
            "id":2,
            "name":"victoria",
            "edad":"26",
            "telefono":"12434332422423432",
            "educacion":"secundaria",
            "estadoCivil":"casada",
            "genero":"femenino",
            "_id":"6223a41ebe76167acb8950b6"
        }
        ,
        "posiciones":[],
        "posicionesTiempo":[],
        "posicionesNumericas":[],
        "__v":0
    },{
        "_id":"6223f2713bb48478be2966c6",
        "id":5,
        "tipo":28,
        "user":
            {
            "id":2,
            "name":
            "victoria",
            "edad":"26",
            "telefono":"12434332422423432",
            "educacion":"secundaria",
            "estadoCivil":"casada",
            "genero":"femenino",
            "_id":"6223f2713bb48478be2966c7"
        }
    ,
        "posiciones":[],
        "posicionesTiempo":[],
        "posicionesNumericas":[],
        "__v":0},
    {
        "_id":"6223f3a03bb48478be2966e4",
        "id":2,
        "tipo":28,
        "user":
            {
            "id":2,
            "name":"victoria",
            "edad":"26",
            "telefono":"12434332422423432",
            "educacion":"secundaria",
            "estadoCivil":"casada",
            "genero":"femenino",
            "_id":"6223f3a03bb48478be2966e5"
        }
    ,
        "posiciones":[],
        "posicionesTiempo":[],
        "posicionesNumericas":[],
        "__v":0},
    {
        "_id":"6223f3d73bb48478be2966e9",
        "id":3,
        "tipo":28,
        "user":
            {
            "id":2,
            "name":"victoria",
            "edad":"26",
            "telefono":"12434332422423432",
            "educacion":"secundaria",
            "estadoCivil":"casada",
            "genero":"femenino",
            "_id":"6223f3d73bb48478be2966ea"
        }
    ,
        "posiciones":["casa","panaderia","oficina"],
        "posicionesTiempo":[1,2,3],
        "posicionesNumericas":[1,2,3,4],
        "__v":0
    }
    ];

// COLUMNAS que van a tener cada juego traido de la bd.
const fields = ['_id','id','tipo','user.id','user.name','user.edad','user.telefono','user.educacion','user.estadoCivil','user.genero','user._id' ,'posiciones[0]','posiciones[1]',
'posiciones[2]','posiciones[3]','posiciones[4]','posiciones[5]','posiciones[6]','posiciones[7]','posiciones[8]','posiciones[9]',
'posicionesTiempo[0]','posicionesTiempo[1]','posicionesTiempo[2]','posicionesTiempo[3]','posicionesTiempo[4]','posicionesTiempo[5]','posicionesTiempo[6]','posicionesTiempo[7]',
'posicionesTiempo[8]','posicionesTiempo[9]',
'posicionesNumericas[0]','posicionesNumericas[1]','posicionesNumericas[2]','posicionesNumericas[3]','posicionesNumericas[4]','posicionesNumericas[5]','posicionesNumericas[6]',
'posicionesNumericas[7]','posicionesNumericas[8]','posicionesNumericas[9]','__v'];
// indico que un objeto tiene otro objeto2 dentro de si mismo y voy a colocarlo en un mismo nivel que el objeto a los parametros del objeto2
const transforms = [unwind({ paths: 'user'})];
// indico que voy a pasear el JSON segun los fields que son las columnas que poseo y indicando las transformaciones dentro de cada obj. JSON
const json2csvParser = new Parser({ fields, transforms });
// realizo el PARSEO de los datos con las configuraciones preasignadaas en la linea anterior.
const csv = json2csvParser.parse(myCars2);
console.log(csv);



//convertir JSON a CSV
fs.writeFileSync("FINAL.csv", csv);

let date_ob = new Date();
// current date
// adjust 0 before single digit date
let date = ("0" + date_ob.getDate()).slice(-2);
// current month
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
// current year
let year = date_ob.getFullYear();

//convertir CSV a XLSX
const path = require('path');
const convertCsvToXlsx = require('@aternus/csv-to-xlsx');

let source = path.join(__dirname, 'FINAL.csv');
let destination = path.join(__dirname, year + "-" + month + "-" + date+'-converted_FINAL.xlsx');

try {
  convertCsvToXlsx(source, destination);
} catch (e) {
  console.error(e.toString());
}

// prints date in YYYY-MM-DD format
console.log(year + "-" + month + "-" + date);

