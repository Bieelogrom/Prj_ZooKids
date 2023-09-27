import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity , Image, ImageBackground, ScrollView } from 'react-native';
import styles from './style';

export default function Home(){
    
    return(
        <View style={styles.container}>
            <ScrollView>
                <View>
                <ImageBackground source={require('./img/tigrinho.gif')} style={styles.buttonImage}>

                   <Text style={styles.textoImagem}>Territorio 1</Text>
                </ImageBackground> 
                </View>

            </ScrollView>
        </View>
    );
}