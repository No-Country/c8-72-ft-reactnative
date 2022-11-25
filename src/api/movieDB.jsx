import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";




const { API_URL, API_KEY } = getEnvVariables();

const movieDB =  axios.create({
    baseURL: API_URL,
    params: {
        api_key: API_KEY,
        language: 'es-ES'
    }
})

export default movieDB