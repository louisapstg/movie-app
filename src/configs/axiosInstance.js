import axios from "axios";
import CONST from "../constants/constants"

const configAxios = {
   baseURL: CONST.BASE_URL_API,
   params: {
      api_key: CONST.API_KEY,
   }
}

export const axiosInstance = axios.create(configAxios)