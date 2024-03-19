import React, { useEffect, useState } from "react";
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";
import SafeContainer from "../components/SafeContainer";

export default function Favoritos( {navigation} ) {
  const [listaFavoritos, setListaFavoritos] = useState([]);

  useEffect(() => {
    const carregarFavoritos = async () => {
      try {
        const dados = await AsyncStorage.getItem("@favoritosvictor");
        if (dados) {
          setListaFavoritos(JSON.parse(dados));
        }
      } catch (error) {
        console.error("Erro ao carregar os dados: " + error);
        Alert.alert("Erro", "Erro ao carregar os dados.");
      }
    };
    carregarFavoritos();
  }, []);

  const excluirTodosFavoritos = async () => {
    Alert.alert(
      "Excluir TODOS?",
      "Tem certeza que deseja excluir todos os favoritos",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: async () => {
            await AsyncStorage.removeItem("@favoritosvictor");
            setListaFavoritos([]);
          },
        },
      ]
    );
  };

  const excluirUm = async (filmeId) => {
    Alert.alert(
      "Deseja Excluir?",
      "Tem certeza que deseja excluir este filme dos favoritos",
      [
        {
          text: "Cancelar",
        },
        {
          text: "Confirmar",
          style: "destructive",
          onPress: async () => {
            try {
              const novosFavoritos = listaFavoritos.filter(
                (filme) => filme.id !== filmeId
              );
              await AsyncStorage.setItem(
                "@favoritosvictor",
                JSON.stringify(novosFavoritos)
              );
              setListaFavoritos(novosFavoritos);
            } catch (error) {
              console.error("Erro ao excluir o filme: " + error);
              Alert.alert("Erro", "Erro ao excluir o filme.");
            }
          },
        },
      ]
    );
  };

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <View style={estilos.viewFavoritos}>
          <Text style={estilos.texto}>
            Quantidade: {listaFavoritos.length || 0}
          </Text>

          {listaFavoritos.length === 0 ? (
            <Text>Não há filmes salvos</Text>
          ) : (
            <Pressable onPress={excluirTodosFavoritos} style={estilos.botaoExcluirFavoritos}>
              <Text style={estilos.textoBotao}>
                <Ionicons name="trash-outline" size={16} /> Excluir favoritos
              </Text>
            </Pressable>
          )}
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          {listaFavoritos.map((filme) => (
            <View key={filme.id} style={estilos.item}>
              <Pressable
                onPress={() => {
                  navigation.navigate("Detalhes", { filme });
                }}
                style={estilos.botaoFilme}
              >
                <Text style={estilos.titulo}>{filme.title}</Text>
              </Pressable>
              <Pressable
                onPress={() => excluirUm(filme.id)}
                style={estilos.botaoExcluir}
              >
                <Ionicons name="trash" color="white" size={16} />
              </Pressable>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
  viewFavoritos: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  texto: { marginVertical: 8 },
  botaoExcluirFavoritos: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },
  textoBotao: { color: "red" },
  item: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  botaoFilme: { flex: 1 },
  titulo: { fontSize: 12 },
  botaoExcluir: {
    backgroundColor: "darkred",
    padding: 4,
    borderRadius: 4,
  },
});
