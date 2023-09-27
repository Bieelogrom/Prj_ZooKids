import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';

import { NavigationContainer, useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation ();
    return(
        <View style={styles.container}>
            <Text style={styles.txtPrincipal}>Bem Vindo</Text>
            <Text style={styles.nome}>"João"</Text>

            <TouchableOpacity  onPress={()=> navigation.navigate('Territorios')}>Territorios</TouchableOpacity>
        </View>
    );
}