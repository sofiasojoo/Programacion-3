import React from "react";
import { Text } from "react-native";

import { View } from "react-native-web";

import { StyleSheet } from "react-native";
import DynamicForm from "../Components/DynamicForm";

function Home (props) {
    return (
        <View >
        <Text >Home</Text>
        <DynamicForm />
        </View>
    )
}


 export default Home