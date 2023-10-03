import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Modal,
  SafeAreaView,
  TextInput

} from "react-native";
import styles from "./style";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Home(){
    const [nome, setNome] = useState(null);
    const [nometemporario, setNomeTemporario] = useState(null);

    let KeyNome = AsyncStorage.getItem("nome")

    const navbar = () => {
        if(KeyNome != null){
            return (<View style={styles.navbar}>
            <TouchableOpacity onPress={() => Retornar()}>
              <Image
                source={require("./img/Retornar.png")}
                style={styles.navbar_Logo}
              ></Image>
              <Text>Retornar</Text>
            </TouchableOpacity>
    
            <TouchableOpacity onPress={() => ativarModal()}>
              <Image
                source={require("./img/Config.png")}
                style={styles.navbar_Logo}
              ></Image>
              <Text>Menu</Text>
            </TouchableOpacity>
          </View>)
        }else{
            return null
        }
    }


    const enviarCadastro = async () => {
      try{ if(nometemporario){
            setNome(nometemporario);
            await localStorage.setItem('nome', nometemporario);
            navigation.navigate('BemVindo')
        }else{
            console.log("ERRO")
        }
    }catch{
        console.log(Error)
    }
    
    };



    return(
        <SafeAreaView style={styles.container}>
        {navbar()}
        <View style={styles.View_Inputs}>

        <Text style={styles.tituloCadastro}>Informações do Usuário</Text>

        <TextInput
                style={styles.input}
                placeholder="Nome"
                onChangeText={text => setNomeTemporario(text)}
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