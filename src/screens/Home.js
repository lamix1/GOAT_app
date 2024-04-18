import React from "react";
import { View, StyleSheet, ScrollView, Alert } from "react-native";
import {Provider, Portal, FAB, TextInput, Button, Card } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function Home({ navigation }) {
  const [visible1, setVisible1] = React.useState(false);

  const [text, setText] = React.useState("");
  
  return (
    <Provider>
      <View style={styles.container}>
      <Card.Title
        title="Card Title"
        subtitle="Card Subtitle"
    />
      </View>
    </Provider>
  );
  }
  const styles = StyleSheet.create({
    container: {
      marginTop: 40,
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "center",
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "center",
      width: "100%",
    },
    fab: {
      position: "absolute",
      margin: 16,
      right: 0,
      bottom: 0,
      backgroundColor: "#d32f2f",
    },
    caixaTexto: {
      width: '100%',
      backgroundColor: 'white'
    },
  });

export default Home;