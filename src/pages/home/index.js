import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image } from 'react-native';
import styles from './style';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

let nome = localStorage.getItem("nome")

export default function Home(){
    const navigation = useNavigation ();
    return(
        <View style={styles.container}>
            <View style={styles.navbar}>
            <Image source={require('./img/CartoonLogo.png')} style={styles.navbar_Logo}></Image>
            </View>

            <View style={styles.botoesView}>
                <Text>Seja bem vindo, {nome}!!</Text>

                <TouchableOpacity style={styles.Territorios}>
                    <Image source={require('./img/Gumball.png')} style={{resizeMode: 'center', height: 70}}></Image>
                    <Text style={{textAlign: 'center'}}>Visitar territórios</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.editarPerfil}>
                    <Image source={require('./img/Jake.png')} style={{resizeMode: 'center', height: 70}}></Image>
                    <Text style={{textAlign: 'center'}}>Editar perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.sobreNós}>
                <Image source={require('./img/Rigby.png')} style={{resizeMode: 'center', height: 70}}></Image>
                <Text style={{textAlign: 'center'}}>Sobre nós</Text>
                </TouchableOpacity>
            </View> 



        </View>
    );
}