import React from "react";
import { ScrollView, View, Text } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles";

export default function Tela4() {
  return (
    <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Giovani"
        postImage={require('../../assets/imagens/massa/massa1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Guilherme"
        postImage={require('../../assets/imagens/massa/massa2.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa3.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa4.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa5.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa6.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa7.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa8.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa9.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/massa/massa10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
  );
}
