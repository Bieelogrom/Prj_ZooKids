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
          console.log("Test2");
          navigation.navigate("Home");
        }
      }, 1000);
    });

  return (
    <View style={styles.container}>
        <Image source={require('./imgs/cartoon.gif')} style={styles.cartoonLogo}></Image>

      <StatusBar style="auto" />
    </View>
  );
}
