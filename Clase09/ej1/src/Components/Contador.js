import React, { Component } from "react";
import { Pressable } from "react-native";
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
        <View>
       <Text>Cantidad de clicks: {this.state.i}</Text>
       <Pressable onPress = {() => this.Cantidad()}>
        <Text>Click aqui para contar</Text>
       </Pressable>
       </View>
    )
  }
}

export default Contador