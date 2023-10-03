import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './style';

import { NavigationContainer, useNavigation } from '@react-navigation/native';
import Sobre from '../Sobre';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Home(){
    const navigation = useNavigation ();

    const nome = localStorage.getItem("nome")

    function Territorios () {
        navigation.navigate('Territorios')
      }  

    function SobreNos () {
        navigation.navigate('Sobre')
    }


    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
            <Image source={require('./img/cartoon-network-cartoon.gif')} style={styles.navbar_Logo}></Image>
            </View>

            <View style={styles.botoesView}>
                <Text style={styles.fonteTela}>Seja bem vindo, <Text style={styles.fonteButondois}>{nome}!!</Text></Text>

                <TouchableOpacity style={styles.Territorios} onPress={()=>Territorios()}>
                    <Image source={require('./img/Gumball.png')} style={{resizeMode: 'center', height: 90}}></Image>
                    <Text style={styles.textLButtons}>Visitar territórios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.editarPerfil} onPress={() => SobreNos()}>
                    <Image source={require('./img/Jake.png')} style={{resizeMode: 'center', height: 90}}></Image>
                    <Text style={styles.textLButtons}>Sobre nós</Text>
                </TouchableOpacity>
            </View> 



        </View>
    );
}