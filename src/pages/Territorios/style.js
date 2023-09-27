import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#2E8B57',
    },

    group1:{    
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '25%',
        padding: 7,
        margin: 30
    },

    button:{
        backgroundColor: 'black',
        width: '48%',
        height: '100%',
        borderRadius: 30,
    },

    buttonImage:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },

    textoImagem:{
        color: 'Black',
        fontSize: 34
    }
})