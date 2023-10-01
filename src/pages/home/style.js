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
        justifyContent: 'center'
    },

    navbar_Logo: {
        height: 60,
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
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: 'black',
        borderWidth: 1,
    },

    editarPerfil: {
        justifyContent: 'center',
        backgroundColor: '#E9B824',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: 'black',
        borderWidth: 1,
    },

    sobreNós: {
        justifyContent: 'center',
        backgroundColor: '#D83F31',
        width: 120,
        height: 120,
        borderRadius: 60,
        borderColor: 'black',
        borderWidth: 1,
    }

    
})