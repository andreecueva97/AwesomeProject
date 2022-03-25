import React from 'react';
import {
  Image,StyleSheet,Dimensions,  Text,View,TouchableOpacity,TouchableHighlight,Modal,
} from 'react-native';
class Juego_Mapa extends React.Component{
    constructor(props){
        super(props);
        this.state={
          modalVisible:false,//everything true, change later
          posiciones:['la casa',],
          almacen:['c','b'],
          images:[
            {source:require('@img/a.png'),opacity:1, name:'a'},
            {source:require('@img/b.png'),opacity:1, name:'b'},
            {source:require('@img/c.png'),opacity:1, name:'c'},
            {source:require('@img/d.png'),opacity:1, name:'d'},
            {source:require('@img/e.png'),opacity:1, name:'e'},
            {source:require('@img/f.png'),opacity:1, name:'f'},
            {source:require('@img/g.png'),opacity:1, name:'g'},
            {source:require('@img/h.png'),opacity:1, name:'h'},
            {source:require('@img/i.png'),opacity:1, name:'i'},
            {source:require('@img/j.png'),opacity:1, name:'j'},
            {source:require('@img/k.png'),opacity:1, name:'k'},
            {source:require('@img/l.png'),opacity:1, name:'l'},//AI-EXT => L ahora, es una pequena difurcasion que me di cuenta luego
            {source:require('@img/m.png'),opacity:1, name:'m'},
            {source:require('@img/n.png'),opacity:1, name:'n'},
            {source:require('@img/o.png'),opacity:1, name:'o'},
            {source:require('@img/p.png'),opacity:1, name:'p'},
            {source:require('@img/q.png'),opacity:1, name:'q'},
            {source:require('@img/r.png'),opacity:1, name:'r'},
            {source:require('@img/s.png'),opacity:1, name:'s'},
            {source:require('@img/t.png'),opacity:1, name:'t'},
            {source:require('@img/u.png'),opacity:1, name:'u'},
            {source:require('@img/v.png'),opacity:1, name:'v'},
            {source:require('@img/w.png'),opacity:1, name:'w'},
            {source:require('@img/x.png'),opacity:1, name:'x'},
            {source:require('@img/y.png'),opacity:1, name:'y'},
            {source:require('@img/z.png'),opacity:1, name:'z'},
            {source:require('@img/aa.png'),opacity:1, name:'aa'},
            {source:require('@img/ab.png'),opacity:1, name:'ab'},
            {source:require('@img/ac.png'),opacity:1, name:'ac'},
            {source:require('@img/ad.png'),opacity:1, name:'ad'},
            {source:require('@img/ae.png'),opacity:1, name:'ae'},
            {source:require('@img/af.png'),opacity:1, name:'af'},
            {source:require('@img/ag.png'),opacity:1, name:'ag'},
            {source:require('@img/ah.png'),opacity:1, name:'ah'},
            {source:require('@img/ai.png'),opacity:1, name:'ai'},
            {source:require('@img/aj.png'),opacity:1, name:'aj'},
            {source:require('@img/ak.png'),opacity:1, name:'ak'},
            {source:require('@img/am.png'),opacity:1, name:'am'},
            {source:require('@img/an.png'),opacity:1, name:'an'},
        ]
        }
    }
  setModalVisible = (visible) => {
      this.setState({ modalVisible: visible });
  }
  funca(a){
    console.log('funca...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR

    const imagess = this.state.images.map(el => (
      el.name===a? {...el, opacity: 0}: el  
    ));
    console.log(imagess);
    this.setState({ images:imagess });
    //agregar posicion
    this.state.posiciones.push('almacen');
    //console.log(this.state.posiciones);
  }
  funcionnOpacity(camino){                          //change and passing parameter and ceros for value parameter
    console.log('opacidad...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR
    //let images=this.state.images;
    console.log(camino);
    
    for (let index = 0; index < camino.length; index++) {
      const element = camino[index];
      this.funca(element);
      console.log(element);
    }
    //  camino.map(elcamino =>(
    // images =this.state.images.map(el => (
    //   el.name===elcamino? {...el, opacity: 0}: el  
    //  )),this.setState({ images })
       
    // //   )
    //   ) );
    
      // this.setState({ images });
    // let images = this.state.images.map(el => (
    //   el.name==='a'? {...el, opacity: 0}: el  
    // ));

    //agregar posicion
    this.state.posiciones.push('almacen');
    //console.log(this.state.posiciones);
    }
    funcionOpacidadBasica(){
       //option 1
    // let images = [ ...this.state.images ];
    // images[0] = {...images[0], opacity: 0};
    // this.setState({ images });
    //option 2
    console.log('opacidad...');                     //en vez de pasarle 'b' LE PASAS POR PARAMETRO UN VALOR

    let images = this.state.images.map(el => (
      el.name==='a'? {...el, opacity: 0}: el  
    ));
    this.setState({ images });
    //agregar posicion
    this.state.posiciones.push('almacen');
    console.log(this.state.posiciones);
    }

    
    render(){
      const {modalVisible}=this.state;
      return(
        <View style={styles.inicio_View}>
        <View   style={{flex:2,zIndex:10,paddingTop:1}}> 
         <Image 
              style={{top:350,left:195,opacity:1}}
              source={require('@img/testmandados_LaCasaModificado.jpg')} 
          />   
    <>
       {this.state.images.map((img,i)=>
        <Image style={{top:350,left:195,position:'absolute',opacity:img.opacity}} source={img.source} key={i} />
           )
       }
     </>


        </View>     
           
        <View style={{zIndex:10,top:250,alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 10,left:0}}>
        <TouchableOpacity 
            style={[styles.inicio_Button,{left:-280}]}
            onPress={() => { 
              
              this.funcionnOpacity();
              //this.props.navigation.navigate('Revision_General') 
            }}
          >
              <Text style={styles.inicio_Text}>Terminar</Text>
          </TouchableOpacity>
        </View>
        <View style={{zIndex:10,top:230,alignContent: 'center', justifyContent: 'center',flexDirection: 'row', borderRadius: 3,
marginBottom: 0}}>
        <TouchableOpacity 
            style={[styles.inicio_ButtonTime,{left:-290,top:20,alignContent: 'center', justifyContent: 'center',textAlign:'center'}]}
            onPress={()=>{}}
          >
              {/* <Text style={styles.inicio_Text}>00:00:00</Text> */}
              
          </TouchableOpacity>
          
        </View>
        
        <View style={[styles.RevisionGeneral_Button_info,{top:-80}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={() => { this.setModalVisible(!modalVisible); }}
              >
                  <Text style={{fontSize:14,textAlign:'center'}}>info</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_info,{top:-160}]}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}>≡</Text>
              </TouchableOpacity>
            </View>
            <View style={{backgroundColor:'lightblue',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:30, top:-90,left:160,zIndex:10}}>
            <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{this.funcionnOpacity(this.state.almacen)}}
              >
                  <Text style={{fontSize:8,textAlign:'center'}}>almacen</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.RevisionGeneral_Button_Calle,{top:41,zIndex:10}]}>
            {/* <TouchableOpacity 
                style={{justifyContent:'center',borderRadius: 40/2, height:40,width:40,borderWidth: 3,borderColor:'lightgrey'}}
                onPress={()=>{}}
              >
                  <Text style={{fontSize:25,textAlign:'center'}}></Text>
              </TouchableOpacity> */}
            </View>
            <View styles={{}}>
            <Modal
                    animationType="none"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => { Alert.alert("Modal fue cerrado."); }}
                >
                    <View style={{zIndex:10,left:10,top:300,transform:[{rotate: '90 deg'}],backgroundColor:'white'}}>
                        <View style={{backgroundColor:"#AABECF",padding:20,borderRadius:3}}>
                            <Text style={{}}>Esta tarea consiste en hacer varios mandados. Tenés que salir de tu hogar a las 9:15 hs., hacer varios mandados o diligencias y estar de regreso a las 13:00 hs. Para recorrer el camino de tu hogar a la estación, se tardan 30 minutos. La oficina donde se pagan los impuestos cierra a las 10 hs. Los negocios y el correo cierran a las 12:00 hs. y la panadería abre después de las 11:00 hs. Tenés que hacer las siguientes tareas</Text>
                            <TouchableHighlight
                                style={{ backgroundColor: "#34495E" }}
                                onPress={() => { this.setModalVisible(!modalVisible); }}
                            >
                                <Text style={{color:'white'}}>continuar</Text>
                            </TouchableHighlight>
                        </View>
                    </View>
                </Modal>
            </View>
    </View>  
      )
  }
}


const styles = StyleSheet.create({
  RevisionGeneral_Button_info:{
        backgroundColor:'lightblue',alignContent: 'center',
        flexDirection: 'row', 
        borderRadius: 40/2, 
        height:40,width:40,
        top:30, left:43,
      },
  RevisionGeneral_Button_Calle:{
        alignContent: 'center',
        flexDirection: 'row', 
        transform:[{rotate: '66 deg'}],
        height:120,width:10,
         left:162,
  },
  inicio_View:{
    //flexDirection:'column',
    backgroundColor:'lightgrey',
    flex:1,                                          // volver a colocar
    alignContent: 'center', justifyContent: 'center',
    transform:[{rotate: '90 deg'}],
    //width:Dimensions.get('window').height,
    height:Dimensions.get('window').width,
    width:Dimensions.get('window').height,
    // height:Dimensions.get('window').width,
  },
  inicio_Text:{
    fontSize:30,
    alignContent: 'center', justifyContent: 'center',
    alignItems: 'center',textAlign:'center',
  },
  inicio_Title:{
    fontSize:30,
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
    
    width:180,
    backgroundColor:'#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
  inicio_ButtonTime:{
    fontSize:30,
    borderRadius:10,
    borderColor:'grey',
    borderWidth:1,
    width:200,
    backgroundColor:'#AABECF',
    padding: 10,
    elevation: 2,
    justifyContent: "center",alignItems: "center",
    textAlign:'center',
  },
});

export default Juego_Mapa;