import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({

    text:{
        fontWeight:'bold',
        fontSize:50,
        alignItems:'center',
        justifyContent:'center',
        paddingTop:120,
    },
    background:{
        backgroundColor:themes.colors.branco,
    }
})