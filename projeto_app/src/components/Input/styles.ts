import { StyleSheet } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    BoxInput:{
        width:'98%',
        height:40,
        borderWidth:1,
        borderRadius:40,
        marginTop:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around',
        paddingHorizontal:10,
        backgroundColor:themes.colors.branco,
        borderColor:themes.colors.black
    },
    Input:{
        height:'100%',
        width:'85%',
        backgroundColor:themes.colors.branco,
        borderRadius:40,
        //fontWeight:'bold'
    },
    titleInput:{
        marginLeft:5,
        color:themes.colors.black,
        marginTop:20,
        fontWeight:'bold',
    },
    Icon:{
        width:'100%'
    },
    Button:{
        width:'10%'
    }
})