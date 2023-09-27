import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, ActivityIndicator } from 'react-native';
import styles from './style';
import { TouchableOpacity } from 'react-native-web';
import { useEffect } from 'react';


export default function({navigation}){
    useEffect(() => {
        setTimeout(() => {
            if(localStorage.getItem("nome")==null){
                navigation.navigate("Home");
            }else{
                navigation.navigate("BemVindo");
            }
        }, 2000)
    })


    return(
        <View style={styles.container}>
            <View style={styles.Img_View}>
            <Image source={require("./../../../assets/splash/Zoo3.gif")} style={{width: 300,height: 215,}} resizeMode={'cover'}/>
            </View>

            <ActivityIndicator size={'large'} color={'#00ff00'}/>


            <StatusBar style="auto" />
        </View>
    );
}