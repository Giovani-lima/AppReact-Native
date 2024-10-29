import React from "react";
import { ScrollView, View, Text } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles";

export default function Tela5() {
  return (
    <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Giovani"
        postImage={require('../../assets/imagens/sobremesas/sobremesa1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Guilherme"
        postImage={require('../../assets/imagens/sobremesas/sobremesa2.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa3.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa4.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa5.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa6.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa7.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa8.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa9.png')}
        initialLikes=""
        comments="56"
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/sobremesas/sobremesa10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
  );
}
