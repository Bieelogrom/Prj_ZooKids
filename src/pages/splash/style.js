import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: '#FFFFFFF',
    },

    Botão_View: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        
    },

    Img_View: {
        flex: 1,
        justifyContent: "center"
    },

    Logo_View: {
        flex: 1,

    },


    Text_Botão: {
        color: "#0B6E4F",
        fontWeight: "bold",
        fontSize: 19,
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 7,
        borderWidth: 2,
        borderColor: "#32936F"


    }


})