import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/pages/SplashSreen';
import Home from './src/pages/Home';
import Territorios from './src/pages/Territorios';
import Cadastro from './src/pages/Cadastro';
import Sobre from './src/pages/Sobre';
import ZonaUm from './src/pages/Territ_orios/Um'

import { useFonts, YanoneKaffeesatz_400Regular, YanoneKaffeesatz_700Bold } from '@expo-google-fonts/yanone-kaffeesatz';


const Stack = createNativeStackNavigator ();

export default function app(){

  const[fontLoaded] = useFonts({
    YanoneKaffeesatz_400Regular,
    YanoneKaffeesatz_700Bold
  })
  if(!fontLoaded){
    return null;
  }

  return(
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Splash-Screen" component={SplashScreen} options={{headerShown:false}}  />
        <Stack.Screen name="BemVindo" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="Territorios" component={Territorios} options={{headerShown:false}} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{headerShown:false}} />
        <Stack.Screen name="Sobre" component={Sobre} options={{headerShown:false}}/>
        <Stack.Screen name="Zona1" component={ZonaUm} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
