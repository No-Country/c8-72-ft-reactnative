import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native"


import Icon  from "react-native-vector-icons/Ionicons"

import { SvgXml } from 'react-native-svg'
import google from '../../assets/google';
import facebook from '../../assets/facebook';

import styles from "../styles";



export const RegisterScreen = ({ navigation }) => {

    const [ hidePassword, setHidePassword] = useState(true)


  return (
    <View style={ styles.container}>
        <View style={ styles.subContainer }>

            <View style={{ ...styles.containerTitle, marginTop: 18 }}>
                <Text style={{ color: 'white', fontSize: 20}}>Registrarme</Text>
            </View>

            <View style={{ ...styles.containerInput, height: 230 }}>
                <TextInput 
                    placeholder="Usuario"
                    style={ styles.textInput }
                    cursorColor='#FFF'
                    placeholderTextColor="#9D9D9D"
                    keyboardType="email-address"

                />

                <TextInput 
                    placeholder="Contraseña"
                    style={{...styles.textInput, marginTop: 20}}
                    cursorColor='#FFF'
                    placeholderTextColor="#9D9D9D"
                    secureTextEntry={ hidePassword }
                    autoComplete="password"         
                    
                />
            
                <Icon
                    name={ hidePassword ? "eye-off-outline"  : "eye-outline" }
                    size={ 20 }
                    color="#FFF"
                    style={ styles.icon }
                    onPress={ () => setHidePassword(!hidePassword) }
                /> 

                <TextInput 
                    placeholder="Repetir contraseña"
                    style={{...styles.textInput }}
                    cursorColor='#FFF'
                    placeholderTextColor="#9D9D9D"
                    secureTextEntry={ hidePassword }
                    autoComplete="password"         
                    
                />
            
                <Icon
                    name={ hidePassword ? "eye-off-outline"  : "eye-outline" }
                    size={ 20 }
                    color="#FFF"
                    style={ styles.icon }
                    onPress={ () => setHidePassword(!hidePassword) }
                />

            </View>


            {/* Boton Registrarme */}

            <Pressable 
                style={{ ...styles.btnLogin,  marginTop: 15 }}
                onPress={ () => navigation.navigate('BottomTab')}
            >
                <Text style={{ color: '#FFF', fontSize: 15, fontWeight: '600' }}>Registrarme</Text>
            </Pressable>

            <Text style={styles.register}>Ya tengo una cuenta. {''}
                <Text
                    onPress={() => navigation.navigate('LoginScreen')}
                    style={ styles.registerLink}
                >Iniciar Sesión</Text>
            </Text>


            <View style={{ alignItems: 'center', marginTop: 50}}>
                <Text style={{ color: '#FFF'}}>O ingresar con</Text>
            </View>

            <View style={ styles.media }>
                <SvgXml 
                    xml={google} 
                    width={67} 
                    height={67} 
                    style={{ marginTop: 5, marginRight: 10}}
                />
                <SvgXml 
                    xml={facebook} 
                    width={60} 
                    height={60} 
                />
            </View>

        </View>
    </View>
  )
}
