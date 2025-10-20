import React, { Component } from "react";
import { Pressable } from "react-native";
import { Text, View } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-web";

class Register extends Component  {
    constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        username: ""
}}

onSubmit(){
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);
    
}
 

  

    render () {return (
        <View style= {style.contenedor}>
        <Text style= {style.titulo}>Register</Text>
        <Pressable onPress = {() => this.props.navigation.navigate('Login' )}>
         <Text style= {style.texto}>Ir a Login </Text>
         </Pressable>
         
        <TextInput style= {style.input}
        keyboardType='email-address'
        placeholder='email'
        onChangeText={ text => this.setState({email:text}) }
        value={this.state.email} />
        <TextInput style= {style.input}
        keyboardType='default'
        placeholder='username'
        secureTextEntry={true} 
        onChangeText={ text => this.setState({username:text}) }
         value={this.state.username}/>
        <TextInput style= {style.input}
        keyboardType='default'
        placeholder='password'
        secureTextEntry={true} 
        onChangeText={ text => this.setState({password:text}) }
        value={this.state.password}/> 
        <Pressable style= {style.boton} onPress={() => this.onSubmit()} >
        <Text style= {style.textoBoton}> Login </Text> 
        </Pressable> 
        
        </View>
    )}
}
let style = StyleSheet.create({
    titulo:{
        fontSize: 50,
        fontWeight: "bold",
        marginLeft:10
    },
    texto: {
        backgroundColor: "yellow",
        textAlign: "center",
        width: "50%",
        height: 40,
        marginTop: 20,
           paddingTop: 10,
            borderRadius: 4,
        marginLeft: 10

    },
    contenedor: {
        paddingHorizontal: 10,
        marginTop: 20
    },
    input: {
        height: 20,
paddingVertical: 15,
paddingHorizontal: 10,
borderBottomWidth: 1,
borderColor:"#ccc",
borderRadius: 6,
marginVertical: 10,
margin: 10

    },
    boton: {
    backgroundColor: "#28a745" , 
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 4, 
    borderColor: "#28a745",
       paddingTop: 10,

    }, 

    textoBoton: {
        color:" #fff"
    }
   
})

 export default Register