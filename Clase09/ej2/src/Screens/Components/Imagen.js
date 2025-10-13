import React from 'react'
import { Image } from 'react-native-web'
import { StyleSheet } from 'react-native'


function Imagen() {
  return <Image style={styles.image} 
 source={require('../../../assets/img/zonaMedia.jpeg')}
 resizeMode='contain'/>
}


const styles = StyleSheet.create({
   image: {
    height: 400,
    width: 600
  },
}) 
export default Imagen

