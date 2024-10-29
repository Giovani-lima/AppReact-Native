import React from "react";
import { ScrollView, View, Text } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles";

export default function Tela7() {
  return (
    <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Giovani"
        postImage={require('../../assets/imagens/drinks/drink1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Guilherme"
        postImage={require('../../assets/imagens/drinks/drink2.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink3.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink4.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink5.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink6.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink7.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink8.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink9.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/drinks/drink10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
  );
}
