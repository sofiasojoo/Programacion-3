import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-web";
import { db, auth } from '../Firebase/config';

class NuevoPost extends Component  {
    constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        mensaje: ""
}}

onSubmit(){
   
        this.setState({registered: true});
        this.props.navigation.navigate('Profile' )
        db.collection('posts').add({
            owner: auth.currentUser.email,
            mensaje: this.state.mensaje,
            createdAt: Date.now(),
            likes: []
        })
        .then (res =>{
            console.log(res);
            
        })
        .catch (e => {
            console.log(e)
        })
        
          


    
}
    render () {return (
        <View >
             
             <TextInput 
                    keyboardType='default'
                    placeholder='mensaje'
                    onChangeText={ text => this.setState({mensaje:text}) }
                     value={this.state.mensaje}/>
            <Pressable onPress={() => this.onSubmit()} >
                    <Text> Nuevo Post </Text> 
            </Pressable> 
        </View>
    )}
}


 export default NuevoPost