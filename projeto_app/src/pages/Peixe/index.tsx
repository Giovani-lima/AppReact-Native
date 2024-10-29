import React from "react";
import { ScrollView } from 'react-native';
import Post from '../../components/Post'; // Importando o componente Post
import { style } from "./styles"; 


export default function Tela3 (){
    return(
        <ScrollView style={style.background}>
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="estagariodaf1"
        postImage={require('../../assets/imagens/peixe/peixe1.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
      
      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe2.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

       <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe3.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe4.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe5.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe6.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe7.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe8.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe9.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />

      <Post 
        profileImage={require('../../assets/imgperfil.png')}
        username="outrousuario"
        postImage={require('../../assets/imagens/peixe/peixe10.png')}
        initialLikes=""
        comments=""
        Descrição=''
      />
    </ScrollView>
    )

}