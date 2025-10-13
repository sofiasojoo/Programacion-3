import React from "react";
import { Text } from "react-native";
import BotonClick from "../../Components/BotonClick";
import { View } from "react-native-web";
import Contador from "../../Components/Contador";

function Home () {
    return (
        <View>
        <Text>"Hola Mundo"</Text>
        <BotonClick/> 
        <Contador/>
        </View>
    )
}
 export default Home