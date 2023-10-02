import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#FFFFFF',
        
    },

    navbar: {
        width: '100%',
        height: 135,
        backgroundColor: '#000000',
        justifyContent: 'center',
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    navbar_Logo: {
        height: 90,
        resizeMode: 'contain',

    },

    botoesView:{
        flex: 1,
        flexDirection: "column",
        justifyContent: 'space-around',
        alignItems: 'center'
    },

    Territorios: {
        justifyContent: 'center',
        backgroundColor: '#219C90',
        width: 180,
        height: 180,
        borderRadius: 120,
        borderColor: 'black',
        borderWidth: 1,
    },

    editarPerfil: {
        justifyContent: 'center',
        backgroundColor: '#E9B824',
        width: 180,
        height: 180,
        borderRadius: 120,
        borderColor: 'black',
        borderWidth: 1,
    },

    sobreNós: {
        justifyContent: 'center',
        backgroundColor: '#D83F31',
        width: 240,
        height: 240,
        borderRadius: 120,
        borderColor: 'black',
        borderWidth: 1,
    },

    textLButtons: {
        textAlign: "center",
        backgroundColor: "white",
        borderRadius: 10,
        borderWidth: 1,
        borderColor: "black",
        fontSize: 30,
        fontWeight: "bold",
        fontFamily: "YanoneKaffeesatz_700Bold"
    },

    fonteButondois: {
        fontSize: 40,
        fontWeight: "bold",
        fontFamily: "YanoneKaffeesatz_700Bold",
        color: "red"
    },


    fonteTela: {
        fontFamily: "YanoneKaffeesatz_400Regular",
        fontSize: 40,

    }

    
})