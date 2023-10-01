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
} from "react-native";
import styles from "./style";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Home() {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);

  function Retornar() {
    navigation.navigate("BemVindo");
  }

  function ativarModal() {
    setModal(true);
  }

  function fecharModal() {
    setModal(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
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
      </View>

      <View style={styles.territorios_navegacao}>
        <ScrollView horizontal>
          <View style={styles.ScroolView}>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/onça.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/tucano.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/preguila.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/leao.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/macaco.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
            <View style={styles.Territorios}>
              <Image
                source={require("./img/coruja.gif")}
                style={styles.button_gif}
              ></Image>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal visible={modal} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalMenu}>
            <View style={styles.modal_Navbar}>
              <Text style={{ textAlign: "center" }}>MENU</Text>
            </View>

            <View>
              <TouchableOpacity>
                <Text>Editar Perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => fecharModal()}>
                <Text>Fechar Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
