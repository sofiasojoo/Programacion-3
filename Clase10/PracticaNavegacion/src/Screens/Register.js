import React from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";



import { StyleSheet } from "react-native";

function Register (props) {
    return (
        <View >
        <Text style= {style.titulo}>Register</Text>
      
       <Pressable onPress = {() => props.navigation.navigate('Login' )}>
         <Text style= {style.texto}>Ir a Login </Text>
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
        backgroundColor: "yellow",
        textAlign: "center",
        width: "50%",
        height: 40,
        marginTop: 20,
        marginLeft: 10

    }
    
   
})

 export default Register