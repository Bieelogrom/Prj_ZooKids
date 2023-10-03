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

  function editarConta() {
    setModal(false);
    navigation.navigate("Cadastro");
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
        <View>
          <Text style={styles.fonteMenu_modal_black}>
            Selecione um território para visitar!
          </Text>
        </View>
        <ScrollView horizontal>
          <View style={styles.ScroolView}>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/Onça.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/tucano.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/preguila.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/leao.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/macaco.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.Territorios}>
                <Image
                  source={require("./img/coruja.gif")}
                  style={styles.button_gif}
                ></Image>
                <Text style={styles.textLButtons}>Território 6</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
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
    </View>
  );
}
