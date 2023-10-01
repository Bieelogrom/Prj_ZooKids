import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container:{
        flex: 1,
        alignItems: "center",
        backgroundColor: '#FFFFFF',
    },

    navbar: {
        width: '100%',
        height: 135,
        backgroundColor: '#000000',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 100,
        borderBottomRightRadius: 10,
        borderBottomLeftRadius: 10,
    },

    navbar_Logo: {
        height: 60,
        width: 60,

    },

    modal:{
        flex:1,
        justifyContent: "center",
        alignItems: "center"
    },  

    modalMenu: {
        backgroundColor: "#7D7C7C",
        width: 350,
        height: 300,
        borderRadius: 10,
    },

    modal_Navbar: {
        width: '100%',
        height: 67.5,
        backgroundColor: '#191717',
        gap: 100,
        borderRadius: 15,
        justifyContent: "center"
        
    },

    navbar_Logo_modal: {
        height: 45,
        width: 45,
        marginLeft: 10

    },

    
    territorios_navegacao: {
        width: "100%",
        height: 300,
    

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

    ScroolView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        gap: 25,
        marginLeft: 10,
        marginRight: 10
    },

    button_gif: {
        height: 80,
        resizeMode: 'center'
    }

})