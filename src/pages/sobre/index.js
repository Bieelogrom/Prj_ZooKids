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
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function () {
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

  function editarConta() {
    setModal(false);
    navigation.navigate("Cadastro");
  }
  return (
    <View style={styles.container}>
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => Retornar()}>
          <Image
            source={require("./imgs/Retornar.png")}
            style={styles.navbar_Logo}
          ></Image>
          <Text>Retornar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => ativarModal()}>
          <Image
            source={require("./imgs/Config.png")}
            style={styles.navbar_Logo}
          ></Image>
          <Text>Menu</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={modal} transparent animationType="fade">
        <View style={styles.modal}>
          <View style={styles.modalMenu}>
            <View style={styles.modal_Navbar}>
              <Text style={styles.fonteMenu_modal}>MENU</Text>
            </View>

            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity onPress={() => editarConta()}>
                <Text style={styles.fonteMenu_modal}>Editar Perfil</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => fecharModal()}>
                <Text style={styles.fonteMenu_modal}>Fechar Menu</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <StatusBar style="auto" />
    </View>
  );
}
