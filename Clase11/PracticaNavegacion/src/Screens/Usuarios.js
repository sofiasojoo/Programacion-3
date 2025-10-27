import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";
import { db, auth } from '../Firebase/config';

import { FlatList, TextInput, View } from "react-native-web";



class Usuarios extends Component  {

     constructor(props){
    super(props);
    this.state = {
        usuarios: []
       
}}

componentDidMount(){
    db.collection('users').onSnapshot(
docs =>{
        let usuarios = [];
   docs.forEach( doc => {
		usuarios.push({
			id: doc.id,
			data: doc.data()
})
	   this.setState({
		usuarios: usuarios,
		loading: false
   })
   console.log(usuarios);
   
})}
)}

    render () {return (
        <View >
            <Text>Lista de usuarios</Text> 
      <FlatList
                  data={ this.state.usuarios }
                  keyExtractor={ item => item.id.toString() }
                  renderItem={ ({item}) => <Text>{item.data.username} {item.data.email}</Text> }
      />
        </View>
    )}
}


 export default Usuarios