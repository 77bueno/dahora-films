# DaHora Filmes

Exemplo de app nativo multiplataforma criado com React Native e Expo.

### Solução: recursos utilizados

- Componentes/Recursos nativos: `TextInput`, `Button`, `Vibration` e `Alert`
- Eventos:
  - `onChangeText` no `TextInput` para captura em tempo real do nome do filme digitado e atualização no `state` usando a função `filmeDigitado`
  - `onPress` no `Button` para acionamento da função `buscarFilmes`
  - `onSubmitEditing` no `TextInput` para acionamento da função `buscarFilmes`

  
## Branch 04

Para gerenciar os recursos de navegação é necessário usar uma biblioteca de navegação.

As mais conhecidas são a **React Navigation** e a **Expo Router**.

Atualmente (Fevereiro/2024) a biblioteca mais usada e considerada padrão é a **React Navigation**.

### Site oficial: 

- React Navigation: https://reactnavigation.org
- Expo Router: https://docs.expo.dev/router/introduction/

### Como usar o React Navigation com navegação Stack

#### Dependências

React Navigation: `npm install @react-navigation/native`

Dependências para navegação: 

`npx expo install react-native-screens react-native-safe-area-context`

Mecanismos de navegação Stack: 

`npm install @react-navigation/native-stack`


## Branch 03

- Criação das telas básicas: Sobre e Privacidade
- Componente `ScrollView` para conteúdos maiores que a tela com suporte à rolagem
- Componente `Linking` para criação de link para a web.

## Branch 02

### Utilização de fontes adicionais

- Download dos arquivos de fonte (formato TTF ou OTF)
- Colocação na pasta `assets\fonts`
- Instalação das libs `expo-fonts` e `expo-splash-screen`
- Importação das fontes com auxílio dos `hooks` `useFonts` e `useCallback`.
- Aplicação das fontes usando regras de StyleSheet.

Para mais detalhes sobre o processo veja a documentação do Expo Fonts e do Expo Splash Screen:

- https://docs.expo.dev/versions/latest/sdk/font/
- https://docs.expo.dev/versions/latest/sdk/splash-screen/

---

## Dica

Instale a extensão **ES7+ React...** no VSCode para facilitar a programação de componentes.
