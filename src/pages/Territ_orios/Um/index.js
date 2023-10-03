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
  ImageBackground,
} from "react-native";
import styles from "./style";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import style from "./style";

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

  const [itemSelecionado, setItemSelecionado] = useState(null);

  const abrirModal = (item) => {
    setItemSelecionado(item)
  }

  const desabrirModal = () => {
    setItemSelecionado(null)
  }

  

  const data = [
    {
      key: "1",
      name: "Onça-Pintada",
      backgroundColor: "#219C90",
      image: require("./img/Onça.gif"),
      content: 'Felino de porte médio a grande, conhecido por sua pelagem com manchas pretas em formato de rosetas.'
    },
    { key: "2", name: "Onça-Parda", backgroundColor: "#E9B824", content: 'Felino de porte médio, também conhecido como puma ou suçuarana.' },
    { key: "3", name: "Jacaré", backgroundColor: "#EE9322", image: require("./img/Jacare.gif"), content: "Réptil semiaquático com mandíbulas poderosas e pele escamosa." },
    { key: "4", name: "Flamingos", backgroundColor: "#D83F31", image: require("./img/flamingos.gif"), content: "Aves de pernas longas e plumagem rosa, conhecidas por sua elegância." },
    { key: "5", name: "Pequenos Felinos", backgroundColor: "#d5d158", image: require("./img/felinos.gif"), content: "Mamíferos ágeis e carnívoros, como gatos domésticos e linces." },
    { key: "6", name: "Corujas", backgroundColor: "#b3b9b9", image: require("./img/Corujas.gif"), content: "Aves noturnas de rapina com visão aguçada e penas silenciosas." },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => abrirModal(item)}>
      <View style={styles.AnimaisViews}>
        <View
          style={[
            styles.AnimaisViews_Config,
            { backgroundColor: item.backgroundColor },
          ]}
        >
          <ImageBackground source={item.image} style={styles.imagemFundo}>
            <Text style={styles.textAnimais}>{item.name}</Text>
          </ImageBackground>
        </View>
      </View>
    </TouchableOpacity>
  );

  const MeuModalAnimal = ({ item }) => (
    <View style={styles.modal}>
      <View style={styles.modalMenu}>
        <View style={styles.modal_Navbar}>
          <Text style={styles.fonteMenu_modal}>{item.name}</Text>
        </View>

        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-around",
          }}
        >
          <TouchableOpacity>
            <Text style={styles.fonteMenu_modal_animais}>{item.content}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => desabrirModal()}>
            <Text style={styles.fonteMenu_modal}>Fechar Menu</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
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

      <Modal visible={itemSelecionado !== null } animationType="slide" transparent onRequestClose={desabrirModal}>
        {itemSelecionado && (
          <MeuModalAnimal item={itemSelecionado}/>
        )}
      </Modal>


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
