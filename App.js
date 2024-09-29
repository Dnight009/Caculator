import "react-native-gesture-handler"
import React, { useEffect, useState } from 'react';
import {PaperProvider, Text } from "react-native-paper";
import Login from './Component/Login';
import Home from './Component/Home';
import { NavigationContainer } from '@react-navigation/native';
import Contact from "./Screen/Contact";
import BottomTabNavigator from "./Router/BottomTabNavigation";
import MyStack from "./Router/Mysack";



const App = () => {
  const [contacts, setContacts] = useState([])


  return (
    <NavigationContainer>
       <PaperProvider>
        <BottomTabNavigator/>
    </PaperProvider>    
    </NavigationContainer>
  )
}
export default  App;

