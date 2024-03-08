import axios from "axios";

/* Usamos o axios para criar uma refêrencia ao endpoint da API/Service
(chamada de baseURL) e configuramos também o uso API Key. */

/* Como nossa variável de ambiente com a chave de api
foi definida no arquivo .env, para acessá-lo utilizamos
process.env.NOME_DA_VARIAVEL_DE_AMBIENTE */
const apiKey = process.env.EXPO_PUBLIC_API_KEY;

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});

export { api, apiKey }