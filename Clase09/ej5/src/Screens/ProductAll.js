import React, { Component } from "react";
import { Pressable, StyleSheet } from "react-native";
import { Text } from "react-native";
import { FlatList, View } from "react-native-web";
import Card from "../Components/Card";

class ProductAll extends Component{
constructor(props){
    super(props);
    this.state = {

      data: []


   
}
 

  
}
componentDidMount (){
  fetch("https://rickandmortyapi.com/api/character")
  .then((res) => res.json())
  .then (data => 
    this.setState({
      data: data.results
    })
  )
}
  render(){
    return(
        <View style= {styles.flatlist}>
       <Text>Lista de Productos</Text>
       <FlatList
            data={ this.state.data }
            keyExtractor={ item => item.id.toString() }
            renderItem={ ({item}) => <Card info= {item} /> }
/>

       </View>
    )
  }
}

const styles = StyleSheet.create({
    flatlist:{
       
        width: "100%",
        flex:1
        
    },
}) 



export default ProductAll