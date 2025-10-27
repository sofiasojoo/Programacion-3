import React from "react";
import { Text } from "react-native";

import { View } from "react-native-web";

import { StyleSheet } from "react-native";
import { Pressable } from "react-native";

function Profile (props) {
    return (
        <View >
        <Text style= {style.titulo}>"Profile"</Text>
        <Pressable onPress = {() => this.props.navigation.navigate('Login' )}>
                 <Text style= {style.texto}>Desloguearse </Text>
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
        backgroundColor: "#28a745",
        textAlign: "center",
        width: "50%",
        height: 40,
        marginTop: 20,
        paddingTop: 10,
        marginLeft: 10,
        borderRadius: 4

    }
    
   
})

 export default Profile