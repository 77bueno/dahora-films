import { ActivityIndicator, FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardFilme from "../components/CardFilme";
import Separador from "../components/Separador";
import ListaVazia from "../components/ListaVazia";

export default function Resultados({ route }) {
  /* State para gerenciar os resultados da busca da API */
  const [resultados, setResultados] = useState([]);

  /* State para gerenciar o loading (mostrar/esconder) */
  const [loading, setLoading] = useState(true);

  // Capturando o parâmetro filme vindo de BuscarFilmes
  const { filme } = route.params;

  useEffect(() => {
    async function buscarFilmes() {
      try {
        const resposta = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "pt-BR",
            query: filme,
            api_key: apiKey
          }
        })

        /* Adicionando os resultados ao teste */
        setResultados(resposta.data.results);

        /* Desativando o loading */
        setLoading(false)
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    buscarFilmes();
  }, [])

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <Text style={estilos.texto}>Você procurou por: {filme} </Text>

        { loading && 
        <ActivityIndicator size="large" color="#5451a6" /> }

        {!loading && 
          <View style={estilos.viewFilmes}>
          <FlatList
            /* Prop data apontando para o state contendo os dados para a FlatList */
            data={resultados}

            /* Extraindo a chave/key de cada registro/item/filme único */
            keyExtractor={item => item.id}

            /* Prop que irá renderizar cada item/filme em um componente */
            renderItem={({ item }) => {
              return <CardFilme filme={item} />
            }}
            ListEmptyComponent={ListaVazia}
            ItemSeparatorComponent={Separador}
          />
          </View>}
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
  viewFilmes: {
    marginVertical: 8,
  
  },
  texto: {
    marginVertical: 8
  }
});