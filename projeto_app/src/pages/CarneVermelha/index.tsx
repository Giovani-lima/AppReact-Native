import React from "react";
import { ScrollView, View, Text } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles";

export default function Tela1() {
  return (
    <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Giovani"
        postImage={require('../../assets/imagens/carne/carne1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="Guilherme"
        postImage={require('../../assets/imagens/carne/carne2.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne3.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne4.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne5.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne6.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne7.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne8.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne9.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/carne/carne10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
    
  );
}
