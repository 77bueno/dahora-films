// Atalho rnfs - Só funciona se tiver a extensão ES7 instalada
import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardFilme() {
  return (
    <View style={estilos.card}>
      <Image style={estilos.imagem} source={imagemAlternativa} />
      <View style={estilos.corpo}>
        <Text style={estilos.titulo}> Nome do filme... </Text>
        <View style={estilos.botoes}>
            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Leia mais</Text>
            </Pressable>
            <Pressable style={estilos.botao}>
                <Text style={estilos.textoBotao}>Leia mais</Text>
            </Pressable>
        </View>
      </View>
    </View>
  )
}

const estilos = StyleSheet.create({
    card: {
        marginVertical: 4,
        flexDirection: "row",
        borderWidth: 2,
        borderColor: "#5451a6",
        justifyContent: "space-between",
        alignItems: "center"
    },
    imagem: {
        height: 150,
        width: 100,
        flex: 1
    },
    corpo: {
        flex: 2
    }, 
    titulo: {
        backgroundColor: "#5451a6",
        color: "#ffffff",
        textAlign: "center",
        paddingVertical: 8,
        fontSize: 16
    },
    botoes: {
        flexDirection: "row",
        justifyContent: "space-evenly", 
        marginTop: 8
    },
    botao: {
        borderColor: "#5451a6",
        borderWidth: 1,
        padding: 8
    },
    textoBotao: {
        color: "#5451a6",
        fontSize: 12,
        textTransform: "uppercase"
    }
});