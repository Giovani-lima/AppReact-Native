import React from "react";
import { ScrollView } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles"; 


export default function Tela2 (){
    return(
        <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="estagariodaf1"
        postImage={require('../../assets/imagens/frango/frango1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango2.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango3.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango4.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango5.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango6.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango7.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango8.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango9.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/frango/frango10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
    )
}