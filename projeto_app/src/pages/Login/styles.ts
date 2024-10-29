import { Dimensions, StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create ({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
        boxmid:{
        height:'100%',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
    },
    logo:{
        height:100,
        width:100
    },
    botton:{
        width:50,
        height:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:themes.colors.amarelo,
        borderRadius:40,
        marginTop:20,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.45,
        shadowRadius: 4.05,
        elevation: 7
    },
    Image:{
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
    },
})
