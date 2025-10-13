import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";
import { Text } from "react-native";

import { View } from "react-native-web";


function Card (props) {
    return (
        <View >
        <Text >{props.info.title}</Text>
        <Text >{props.info.price}</Text>
        <Text >{props.info.description}</Text>
        <Text >{props.info.category}</Text>
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