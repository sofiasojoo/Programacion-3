import React from "react";
import { Text } from "react-native";
import BotonClick from "../../Components/BotonClick";
import { View } from "react-native-web";
import Contador from "../../Components/Contador";
import { StyleSheet } from "react-native";

function Home () {
    return (
        <View style= {style.home}>
        <Text style= {style.texto}>"Hola Mundo"</Text>
        <BotonClick /> 
        <Contador />
        </View>
    )
}

let style = StyleSheet.create({
    home:{
        padding: 10
    },
    texto: {
        textAlign: "center"
    }
   
})
 export default Home