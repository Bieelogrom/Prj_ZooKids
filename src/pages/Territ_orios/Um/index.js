import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  FlatList,
} from "react-native";
import styles from "./style";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useState } from "react";

export default function Home() {
  const navigation = useNavigation();

  const [modal, setModal] = useState(false);

  function Retornar() {
    navigation.navigate("Territorios");
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

  const data = [
    { key: "1", name: "Onça-Pintada", backgroundColor: "#219C90" },
    { key: "2", name: "Onça-Parda", backgroundColor: "#E9B824" },
    { key: "3", name: "Jacaré", backgroundColor: "#EE9322" },
    { key: "4", name: "Flamingos", backgroundColor: "#D83F31" },
    { key: "5", name: "Pequenos Felinos", backgroundColor: "#d5d158" },
    { key: "6", name: "Corujas", backgroundColor: "#b3b9b9" },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity>
      <View style={styles.AnimaisViews}>
        <View
          style={[
            styles.AnimaisViews_Config,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <Text style={styles.textAnimais}>{item.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

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
            Selecione um animal para conhecer!
          </Text>
        </View>
        <ScrollView>
          <FlatList data={data} renderItem={renderItem} />
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
