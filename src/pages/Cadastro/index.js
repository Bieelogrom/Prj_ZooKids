import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import styles from './style';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

export default function Home(){
    const [nome, setNome] = useState(null);


    const enviarCadastro = () => {
        localStorage.setItem("nome", nome);
        navigation.navigate('BemVindo')
        
    }



    return(
        <SafeAreaView style={styles.container}>
                    
        <View style={styles.View_Inputs}>

        <Text style={styles.tituloCadastro}>Informações do Usuário</Text>

        <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={text => setNome(text)}
            />
            <Text style={styles.textinhoInpur}>Escolha um nome para utilizar durante o uso do</Text>

            <TouchableOpacity style={styles.btnEnviar} onPress={()=> enviarCadastro()} >
                <Text>Cadastrar</Text>
            </TouchableOpacity>

        </View>

            <StatusBar style="auto" />
    
        </SafeAreaView>
    );
}