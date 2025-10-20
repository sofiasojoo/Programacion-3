import React from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";

import { View } from "react-native-web";



function Login (props) {
    return (
        <View >
        <Text style= {style.titulo}>Login</Text>
        <Pressable onPress = {() => props.navigation.navigate('Register' )}>
                 <Text style= {style.texto} >Ir a Registro </Text>
        </Pressable>
         <Pressable onPress = {() => props.navigation.navigate("HomeMenu" )}>
                 <Text style= {style.texto}>Ir a Home Menu </Text>
                 </Pressable>
        </View>
    )
}

let style = StyleSheet.create({
    titulo:{
        fontSize: 50,
        fontWeight: "bold",
        marginLeft:10
    },
    texto: {
        backgroundColor: "orange",
        textAlign: "center",
        width: "50%",
        height: 40,
        marginTop: 20,
        marginLeft: 10

    }
    
   
})
 export default Login