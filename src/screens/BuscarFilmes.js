import { Button, StyleSheet, Text, TextInput, View, Alert, Vibration } from "react-native";
import React, { useState } from "react";
import SafeContainer from "../components/SafeContainer";
import { Ionicons } from "@expo/vector-icons";
 
export default function BuscarFilmes({navigation}) {
  const [filme, setFilme] = useState("");

  const filmeDigitado = (valorDigitado) => {
    setFilme(valorDigitado);
  }

  const buscarfilme = () => {
    if( !filme ){
      Vibration.vibrate(500);
      return Alert.alert("Ops! ", "Você deve digitar um filme!");
    }

    /* Redirecionamento para tela de resultados
    passando o filme para ela através do segundo
    parâmetro do método navigate.
    Obs.: não se esqueça de definir a prop navigation no componente. */
    navigation.navigate("Resultados", {filme});
  }
 
  return (
    <SafeContainer>
      <View style={estilos.body}>
        <View style={estilos.texto}>
          <Text>
            Star trek?, O poderoso Chefão?, A trilogia sonhor dos anéis?
          </Text>
          <Text>Localize um filme que você viu ou gostaria de ver!</Text>
        </View>
        <View style={estilos.sessaoInput}>
          <Ionicons name="film" size={35} color="#5451a6" />
          <TextInput
            style={estilos.input}
            placeholder="Digite o nome do filme"
            onSubmitEditing={buscarfilme}
            onChangeText={filmeDigitado}
            placeholderTextColor={"#5451a6"}
            maxLength={30}
            autoFocus
            enterKeyHint="search"
          />
        </View>
        <Button
          title="Procurar"
          onPress={buscarfilme} 
          color={"#5451a6"}
        />
      </View>
    </SafeContainer>
  );
}
 
const estilos = StyleSheet.create({
  texto: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 25,
    paddingBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: "#5451a6",
    width: "80%",
  },
  sessaoInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  body: {
    flex: 1,
  },
});