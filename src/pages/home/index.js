import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Home(){
    const [nome, setNome] = useState("")

    function enviarCadastro(){
        console.log(nome)
    }



    return(
        <SafeAreaView style={styles.container}>
                    
        <View style={styles.View_Inputs}>
        <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder="Email"
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                keyboardType="numeric"
            />

            <TouchableOpacity style={styles.btnEnviar} onPress={enviarCadastro()} >
                <Text>Cadastrar</Text>
            </TouchableOpacity>
        </View>

            <StatusBar style="auto" />
    
        </SafeAreaView>
    );
}