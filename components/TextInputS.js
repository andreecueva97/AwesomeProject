import React,{ useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,TextInput,
  Text,View,
  useColorScheme,TouchableOpacity
} from 'react-native';

const TextInputS = (props)=>{
    const [text,setText]= useState(props);

    return(
        <View>
<TextInput style={styles.datos_textinput}
      underlineColorAndroid="transparent"
      placeholder="nombre"
      placeholderTextColor="white"
      autoCapitalize = "none"
      // defaultValue={nombre}
      onChangeText={text => setText(text)}
    />
    </View>
    )

}
const styles = StyleSheet.create({
    datos_textinput:{
      margin:15,
      height:40,
      borderColor:'white',
      borderWidth:1,
    },
  });
export default TextInputS;

