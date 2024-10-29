import React from "react";
import { ScrollView, View, Text } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles";

export default function Tela6() {
  return (
    <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Giovani"
        postImage={require('../../assets/imagens/hamburguer/hamburguer1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Guilherme"
        postImage={require('../../assets/imagens/hamburguer/hamburguer2.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer3.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer4.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer5.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer6.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer7.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer8.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer9.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/hamburguer/hamburguer10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
  );
}
