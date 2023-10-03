import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },

  navbar: {
    width: "100%",
    height: 135,
    backgroundColor: "#000000",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    gap: 100,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  navbar_Logo: {
    height: 60,
    width: 60,
  },

  modal: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  modalMenu: {
    backgroundColor: "#7D7C7C",
    width: 350,
    height: 300,
    borderRadius: 10,
  },

  modal_Navbar: {
    width: "100%",
    height: 67.5,
    backgroundColor: "#191717",
    gap: 100,
    borderRadius: 15,
    justifyContent: "center",
  },

  navbar_Logo_modal: {
    height: 45,
    width: 45,
    marginLeft: 10,
  },

  fonteMenu_modal: {
    fontSize: 40,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontFamily: "YanoneKaffeesatz_700Bold",
    marginTop: 20,
  },

  fonteMenu_modal_black: {
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
    fontFamily: "YanoneKaffeesatz_700Bold",
    marginTop: 20,
  },

  territorios_navegacao: {
    width: "100%",
    height: 600,
  },

  Territorios: {
    justifyContent: "center",
    backgroundColor: "#219C90",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: "black",
    borderWidth: 1,
  },

  ScroolView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 25,
    marginLeft: 10,
    marginRight: 10,
  },

  button_gif: {
    height: 80,
    resizeMode: "center",
  },

  textLButtons: {
    textAlign: "center",
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    fontSize: 30,
    fontWeight: "bold",
    fontFamily: "YanoneKaffeesatz_700Bold",
  },

  AnimaisViews: {
    alignItems: "center",
    height: 150,
    marginTop: 40,
  },

  AnimaisViews_Config: {
    width: 300,
    height: 175,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "flex-end",
  },

  textAnimais: {
    color: "white",
    fontSize: 20,
  },
});
