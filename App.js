import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/pages/SplashSreen';
import Home from './src/pages/Home';
import Territorios from './src/pages/Territorios';
import Cadastro from './src/pages/Cadastro';
import Sobre from './src/pages/Sobre';


const Stack = createNativeStackNavigator ();

export default function app(){
  return(
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Splash-Screen" component={SplashScreen} options={{headerShown:false}}  />
        <Stack.Screen name="BemVindo" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Territorios" component={Territorios} />
        <Stack.Screen name="Home" component={Cadastro} options={{headerShown:false}} />
        <Stack.Screen name="Sobre" component={Sobre} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
