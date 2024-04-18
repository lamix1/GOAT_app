import React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import { View, StyleSheet, Image } from "react-native";
const logo = require("../components/horizontal_logo_02_500x500.png");
import * as SecureStore from 'expo-secure-store';
import { useSetRecoilState } from 'recoil';
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function Login({ navigation }) {
    const [viewPassword, setViewPassword] = React.useState(false)
    const [username, setUsername] = useState('Debruninho');
    const [password, setPassword] = useState('minhasenha1');
    const [errorMsg, setErrorMsg] = useState(null);

    /* const setUser = useSetRecoilState(userState); */

   /*  const login = async () => {
        try {
          const data = await loginApi.login(username, password);
          setUser({
            loggedIn: true,
            access: data.access,
            refresh: data.refresh,
          });
          setUsername('');
          setPassword('');
          setErrorMsg(null);
          await SecureStore.setItemAsync('access', data.access);
          navigation.navigate('Main');
        } catch (error) {
          setUser({ loggedIn: false, access: null, refresh: null });
          setErrorMsg('Usuário ou senha inválidos!');
          await SecureStore.deleteItemAsync('access');
        }
      };  */

      return (
        <View style={styles.login}>
            <Image source={logo} style={styles.logo} />
            <TextInput
              mode="outlined"
              label="Usuário"
              value={username}
              onChangeText={setUsername}
              backgroundColor="transparent"
              activeOutlineColor="#7E59D8"
              outlineColor="white"
              selectionColor="#7E59D8"
              textColor="white"
              right={<TextInput.Affix text="/100" />}
              style={styles.caixaTexto}
            />
            <TextInput
              label="Senha"
              
              value={password}
              onChangeText={setPassword}
              activeOutlineColor="#7E59D8"
              outlineColor="white"
              selectionColor="#7E59D8"
              textColor="white"
              
              secureTextEntry={viewPassword}
              mode="outlined"
              right={<TextInput.Icon icon={viewPassword? "eye-off" :"eye"} onPress={()=>setViewPassword(!viewPassword)}/>}
              style={styles.caixaTexto}
            />
            <Button
            style={styles.botaoLogin}
            icon="arrow-right"
            textColor="white"
            mode="contained-tonal"
            onPress={() => navigation.navigate("Main")}
            >
                Acessar
            </Button>
        </View>
      );
    }

    const styles = StyleSheet.create({
        login: {
            flex: 1,
            backgroundColor: "#111111",
            justifyContent: "center",
            alignItems: "center",
            padding: 20,
            width: '100%',
        },
        botaoLogin: {
            marginTop: 20,
            width: '100%',
            backgroundColor: "#7E59D8",
        },
        caixaTexto: {
            width: '100%',
            backgroundColor: "#111111"
        },
        logo: {
            width: 250,
            height: 200,
            resizeMode: "contain",
            
          },
    })