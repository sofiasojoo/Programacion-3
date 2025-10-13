import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { StyleSheet } from "react-native";

class BotonClick extends Component{
 Clickeame(){
    console.log("me clickearon")
}

  render(){
    return(
        <Pressable onPress = {() => this.Clickeame()}>
            <Text style= {style.home}>Clickeame</Text>
        </Pressable>
    )
  }
}

let style = StyleSheet.create({
    click:{
        padding: 4,
        backgroundColor: "#ccc",
        marginBottom: 10,
        borderCurve: 4,
        fontweight: "bold"
    },
   
})

export default BotonClick