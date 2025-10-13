import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text } from "react-native";

class BotonClick extends Component{
 Clickeame(){
    console.log("me clickearon")
}

  render(){
    return(
        <Pressable onPress = {() => this.Clickeame()}>
            <Text>Clickeame</Text>
        </Pressable>
    )
  }
}

export default BotonClick