import React, { Component } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native";
import { View } from "react-native-web";

class Contador extends Component{
constructor(props){
    super(props);
    this.state = {
        i: 0
    }
}

Cantidad(){
    this.setState({i: this.state.i + 1})
}

  render(){
    return(
        <View style= {style.estilo}>
       <Text>Cantidad de clicks: {this.state.i}</Text>
       <Pressable onPress = {() => this.Cantidad()}>
        <Text >Click aqui para contar</Text>
       </Pressable>
       </View>
    )
  }
}

let style = StyleSheet.create({
    estilo:{
        padding: 7,
        backgroundColor: "rgba(0, 255, 0, 0.5)",
        marginBottom: 10,
        borderCurve: 4,
        fontweight: "bold"
        
    },
   
})

export default Contador