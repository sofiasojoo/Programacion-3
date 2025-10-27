import React, { Component } from "react";
import { StyleSheet } from "react-native";
import { Pressable } from "react-native";
import { Text } from "react-native";

import { TextInput, View } from "react-native-web";


import { db, auth } from '../Firebase/config'



class Login extends Component  {
     constructor(props){
    super(props);
    this.state = {
        email: "",
        password: "",
        username: "",
        error: ""
        
}}

onSubmit(){
    console.log(this.state.email);
    console.log(this.state.username);
    console.log(this.state.password);

    if (!this.state.email.includes("@")){
        this.setState({error:"El email esta mal formateado"})
        return
    } 
    if (this.state.password.length < 6){
        this.setState({error:"La password debe tener una longitud mínima de 6 caracteres"})
        return
    } 
   

    
auth.signInWithEmailAndPassword(this.state.email, this.state.password)
    .then((response) => {
        this.setState({loggedIn: true});
        this.props.navigation.navigate("HomeMenu")
    })
    .catch(error => {
        console.log(error);
        
      this.setState({error: 'Credenciales inválidas.'})
    })

 
 

    
}
 
    render () {return (
        <View >
            
        <Text style= {style.titulo}>Login</Text>
        <Pressable onPress = {() => this.props.navigation.navigate('Register' )}>
                 <Text style= {style.texto} >Ir a Registro </Text>
        </Pressable>
         <Pressable onPress = {() => this.props.navigation.navigate("HomeMenu" )}>
                 <Text style= {style.texto}>Ir a Home Menu </Text>
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
                <Text>{this.state.error}</Text>
                <Pressable onPress={() => this.onSubmit()} style= {style.boton}>
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
        backgroundColor: "orange",
        textAlign: "center",
        width: "50%",
           paddingTop: 10,
        height: 40,
        marginTop: 20,
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
borderColor:"‘#ccc",
borderCurve: 6,
marginVertical: 10

    },
    boton: {
    backgroundColor:"#28a745" , 
    paddingHorizontal: 10,
    paddingVertical: 6,
    textAlign: "center",
    borderRadius: 4, 
    borderColor: "#28a745",
    margin:10

    }, 

    textoBoton: {
        color:" #fff"
    }
   
    
   
})
 export default Login