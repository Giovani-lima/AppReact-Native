import React, { useState } from "react";
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { style } from "./styles";

export default function Post({ profileImage, username, postImage, Descrição, initialLikes, comments }) {
  
  const profileImageSource = 
    typeof profileImage === 'string' ? { uri: profileImage } : profileImage;

  const postImageSource = 
    typeof postImage === 'string' ? { uri: postImage } : postImage;

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(initialLikes);

  // Função interação de like
  const handleLikePress = () => {
    if (isLiked) {
      setLikes(likes - 1); // Se já foi curtido, remove um like
    } else {
      setLikes(likes + 1); // Se não foi curtido, adiciona um like
    }
    setIsLiked(!isLiked); // Alterna o estado do like
  };

  return (
    <View style={style.background}>
      <View style={style.header}>
        <Image 
          source={profileImageSource}
          style={style.profileImage}
        />
        <Text style={style.username}>{username}</Text>
      </View>

      <Image 
        source={postImageSource}
        style={style.postImage}
      />

      <View style={style.actions}>
        <TouchableOpacity style={style.actionButton} onPress={handleLikePress}>
          <FontAwesome 
            name={isLiked ? "heart" : "heart-o"}
            size={24} 
            color={isLiked ? "red" : "black"}
          />
        </TouchableOpacity>
        <TouchableOpacity style={style.actionButton}>
          <FontAwesome name="comment-o" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={style.actionButton}>
          <FontAwesome name="bookmark-o" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View style={style.interactionCount}>
        <Text style={style.interactionText}>Descrição: frito{Descrição}</Text>
        <Text style={style.interactionText}>curtidas: {likes}</Text>
        <Text style={style.interactionText}>comentários: 0</Text>
      </View>
    </View>
  );
}
