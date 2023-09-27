import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from './src/pages/splash';
import BemVindo from './src/pages/bem-vindo';
import Territorios from './src/pages/Territorios';
import Home from './src/pages/home';
import Sobre from './src/pages/sobre';


const Stack = createNativeStackNavigator ();

export default function app(){
  return(
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Splash-Screen" component={Splash} />
        <Stack.Screen name="BemVindo" component={BemVindo} />
        <Stack.Screen name="Territorios" component={Territorios} />
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
