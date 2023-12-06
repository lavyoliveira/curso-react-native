import { StyleSheet } from "react-native"

export default StyleSheet.create({
    App:{
        backgroundColor: '#D3D3D3',
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    TextBig:{
        fontSize: 32,
        textAlign: 'center',
        color: '#474a51'
    },
    TextMedium:{
        fontSize: 24,
        textAlign: 'center',
        color: '#474a51'
    },
    Display: {
       backgroundColor: '#000', 
       padding: 20,
       width: 300,
    },
    DisplayText:{
        color: '#fff'
    },
    Botoes:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20
    }
})