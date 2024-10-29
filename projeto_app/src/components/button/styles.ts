import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    button:{
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
    textButton:{
        fontSize:20,
        color:themes.colors.gray,
        fontWeight:'bold'
    },
    Icon:{
        width:'100%'
    }
})