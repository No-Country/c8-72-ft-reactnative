import { REACT_APP_API_URL, REACT_APP_API_KEY } from '@env'

export const getEnvVariables = () => {

    

    return {
        API_URL: REACT_APP_API_URL,
        API_KEY: REACT_APP_API_KEY
    }

}