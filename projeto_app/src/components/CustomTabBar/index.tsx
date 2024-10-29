import React, { useState, useRef } from "react";
import { TouchableOpacity, Text, View, Modal, Animated, Dimensions, StyleSheet } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/Input";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../../components/button";

const { width } = Dimensions.get('window'); // Largura da tela

export default ({ state, navigation }) => {
  const [modalVisible, setModalVisible] = useState(false); // Controla a visibilidade do modal
  const slideAnim = useRef(new Animated.Value(width)).current; // Começa fora da tela à direita

  // Função chamada ao abrir o modal
  const onOpen = () => {
    setModalVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0, // O modal vai até a posição 0 (totalmente visível, vindo da direita)
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  // Função para fechar o modal
  const onClose = () => {
    Animated.timing(slideAnim, {
      toValue: width, // Volta para fora da tela (à direita)
      duration: 300,
      useNativeDriver: true,
    }).start(() => setModalVisible(false));
  };

  return (
    <View style={style.container}> 
      {/* Parte superior com input e botão */}
      <View style={style.tabArea1}>
          {/* Botão que abre o modal */}
          <TouchableOpacity style={style.itenOpenModal} onPress={onOpen}>
            <AntDesign name="bars" style={{ fontSize: 32 }} />
          </TouchableOpacity>
      </View>
      {/* Modal */}
      <Modal transparent={true} visible={modalVisible} animationType="none">
        <Animated.View style={[style.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
          <View style={style.modalArea1}>
            <TouchableOpacity style={style.itenCloseModal} onPress={onClose}>
              <AntDesign name="doubleright" style={{ fontSize: 32 }} />
            </TouchableOpacity>
          </View>
          <View style={style.modalArea2}>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela1")}>
              <Text style={style.textPages}>Carne vermelha</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela2")}>
              <Text style={style.textPages}>Frango</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela3")}>
              <Text style={style.textPages}>Peixe</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela4")}>
              <Text style={style.textPages}>Massas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela5")}>
              <Text style={style.textPages}>Sobremesas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela6")}>
              <Text style={style.textPages}>Hamburguer</Text>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem} onPress={() => navigation.navigate("Tela7")}>
              <Text style={style.textPages}>Drinks</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Modal>
    </View>
  );
};