import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },

    image: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      },

      View_Inputs: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-evenly",

      },

    input: {
        backgroundColor: '#FFFFFF',
        borderWidth: 3,
        borderColor: "#32936F",
        color: 'black',
        height: 50,
        width: '90%',
        margin: 12,
        textAlign: 'center',
        borderRadius: 10,


      },

      btnEnviar: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF99',
        width: '90%',
        borderRadius: 10,
        padding: 15,
      },
})