import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator, ImageBackground } from "react-native";
import { style } from "./styles"; 
import Logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { Input } from "../../components/Input";
import { Button } from "../../components/button";
import { useNavigation, NavigationProp } from "@react-navigation/native";
import BottomRoutes from "../../routes/bottom.routes";

export default function Login () {
    const navigation = useNavigation<NavigationProp<any>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() { 
        try {
            setLoading(true);
            // Se nada for preenchido 
            if (!email || !password) {
                return Alert.alert("Atenção", "Informe os campos necessários!");
            }
            // Verificação de e-mail e senha
            if (email !== "teste@gmail.com" || password !== "123456") {
                return Alert.alert("Erro", "E-mail ou senha incorretos.");
            }
            // Redireciona para a rota se o login for bem-sucedido
            navigation.reset({ routes: [{ name: "BottomRoutes" }] });
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    return (
        <View style={style.container}>
            <ImageBackground 
                source={require('../../assets/imgBackground.png')}
                style={style.boxmid}
                resizeMode="cover"
            >
                <Image 
                    source={Logo} 
                    style={style.logo}
                />
                <Input
                    value={email}
                    onChangeText={setEmail}
                    title="Email"
                    IconRight={MaterialIcons}
                    iconRightName="email"
                />
                <Input
                    value={password}
                    onChangeText={setPassword}
                    title="Senha"
                    IconRight={Octicons}
                    iconRightName={showPassword ? "eye" : "eye-closed"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />
                <Button text='Ir' loading={loading} onPress={getLogin} />
            </ImageBackground>
        </View>
    );
}
