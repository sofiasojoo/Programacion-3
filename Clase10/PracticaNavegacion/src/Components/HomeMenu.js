import React from "react";

import { NavigationContainer } from '@react-navigation/native';

import Home from "../Screens/Home";
import Profile from "../Screens/Profile";
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {FontAwesome6} from '@expo/vector-icons';
const Tab = createBottomTabNavigator();



function HomeMenu () {
    
    return (
       
     <Tab.Navigator>
        <Tab.Screen name="Home" component={ Home } options={ 
            {
             headerShown: false ,  
             tabBarIcon: () => <FontAwesome name="home" size={24} color="black" /> 
            } 
             } />
        <Tab.Screen name="Profile" component={ Profile } options={ { headerShown: false,   tabBarIcon: () => <FontAwesome6 name="person" size={24} color="black" /> } }/>
       
     </Tab.Navigator>
  

    )
}


 export default HomeMenu