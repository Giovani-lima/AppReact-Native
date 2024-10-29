import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        position: 'absolute',    // Fixa a barra de navegação
        top: 0,                  // Coloca a barra no topo da tela
        left: 0,                 // Alinha à esquerda
        right: 0,                // Alinha à direita
        flexDirection: 'column',    // Organiza os itens horizontalmente
        justifyContent: 'space-around', // Distribui igualmente os botões
        alignItems: 'flex-end',    // Centraliza verticalmente
        zIndex: 1,               // Garante que a barra fique acima de outros elementos
        minHeight:Dimensions.get('window').height/10,
    },
    tabItem:{
        flex:1,
        alignItems:'flex-start',
        justifyContent:'center',
        backgroundColor:themes.colors.branco,
        width:'100%',
        maxHeight:Dimensions.get('window').height/10,
        paddingLeft:15
    },
    tabArea1:{
        zIndex: 1,
        alignItems:'center',
        height:70,
        paddingRight:10
    },
    modalArea2:{
        flex:1,
        flexDirection:'column',
        alignItems:'flex-start',
        width:'100%',
        backgroundColor: themes.colors.branco
    },
    itenOpenModal:{
        flex:1,
        paddingHorizontal:5,
        paddingTop:20,
        borderRadius:100,
        alignItems:'center',
        zIndex: 1, // Garante que a barra fique acima de outros elementos
    },
    itenCloseModal:{
        flex:1,
        paddingHorizontal:5,
        paddingTop:18,
        backgroundColor:themes.colors.branco,
        borderRadius:100
    },
    textPages:{
        fontSize:20,
        color:themes.colors.black
    },
    openButton:{
        padding: 10,
        backgroundColor: themes.colors.lightGray,
        borderRadius: 5,
    },
    buttonText:{
        color: themes.colors.black,
        fontSize: 18,
    },
    modalContainer:{
        position: 'absolute', // aparece acima de todos os componentes da tela
        top: 0,
        left: 170,
        right: 0,
        bottom: 0, // Faz o modal ocupar 100% da altura da tela
    },
    modalArea1:{
        flex: 1,
        alignItems: 'flex-start',
        backgroundColor: themes.colors.branco,
        maxHeight:Dimensions.get('window').height/11,
        paddingLeft:10,
        paddingTop:5
    },
    modalText:{
        fontSize: 20,
        marginBottom: 20,
    },
      });
