import { StatusBar } from "expo-status-bar";
import { Text, View, Image, ActivityIndicator } from "react-native";
import styles from "./style";
import { TouchableOpacity } from "react-native-web";
import { useEffect } from "react";

export default function ({ navigation }) {
    useEffect(() => {
      setTimeout(() => {
        if (localStorage.getItem("nome") != null) {
          navigation.navigate("BemVindo");
        } else {
          navigation.navigate("Cadastro");
        }
      }, 4500);
    });

  return (
    <View style={styles.container}>
        <Image source={require('./imgs/Cartoon.gif')} style={styles.cartoonLogo}></Image>

      <StatusBar style="auto" />
    </View>
  );
}
