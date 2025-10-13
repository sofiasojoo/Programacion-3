import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import { View } from "react-native-web";


function Card (props) {
    return (
        <View >
        <Text >{props.info.name}</Text>
        <Text >{props.info.species}</Text>
        <Text >{props.info.gender}</Text>
      
        <Image  style= {styles.imagen}
         source={{uri: props.info.image}}
         resizeMode='contain'/>
        
       
        </View>
    )
}
const styles = StyleSheet.create({
    imagen:{
        height: 100,
        width: 100
        
    },
})

   

 export default Card