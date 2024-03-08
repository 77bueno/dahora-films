import { StyleSheet, Text, View, Image } from 'react-native'
import Travolta from "../../assets/images/confused-travolta.png"

export default function ListaVazia() {
  return (
    <View>
      <Text style={estilos.texto}>Nenhum filme foi encontrado!</Text>
      <Image source={Travolta} />
    </View>
  )
}

const estilos = StyleSheet.create({
    texto: {
      color: "red"
    }
})