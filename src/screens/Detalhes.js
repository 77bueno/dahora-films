import { ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native';
import SafeContainer from '../components/SafeContainer';
import ImagemAlternativa from '../../assets/images/foto-alternativa.jpg'

export default function Detalhes({route}) {
  const { filme } = route.params; 
  const { title, backdrop_path, overview, release_date, vote_average } = filme;
  
  function formataData(data) {
    const [ano, mes, dia] = data.split("-");
    return `${dia}/${mes}/${ano}`;
  }

  return (
    <SafeContainer>
      <View style={estilos.subContainer}>
        <ImageBackground style={estilos.imagemFundo} source={{uri: `https://image.tmdb.org/t/p/w500/${backdrop_path}`}} >
          <Text style={estilos.tituloFilme}> {title} </Text>
        </ImageBackground>

        <View style={estilos.conteudo}>
          <ScrollView>
            <Text style={[estilos.texto, estilos.avaliacao]}>⭐ Avaliação: {vote_average}</Text>
            <Text style={[estilos.texto, estilos.lancamento]}>📅 {formataData(release_date)}</Text>
            <Text style={[estilos.texto, estilos.descricao]}>{overview}</Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  )
}

const estilos = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  imagemFundo: {
    height: 200,
    justifyContent: "center"
  },
  tituloFilme: {
    backgroundColor: "rgba(0,0,0,0.55)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold"
  },
  conteudo: {
    padding: 16,
    flex: 1 /* Apenas para garantir a ocupação do
    espaço em caso de texto muito grande*/
  },
  texto: {
    paddingVertical: 4,
    fontSize: 16 
  },
  avaliacao: { color: "blue" },
  lancamento: { color: "darkblue" },
  descricao: { color: "gray" },
})