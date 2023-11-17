import { axiosInstance } from "../configs/axiosInstance"

const DetailAPI = {
   async getDetailAPI(url, id) {
      try {
         const response = await axiosInstance.get(`/${url}/${id}`);
         return response
      } catch (error) {
         const { message } = error.message.data;
         throw new Error(message)
      }
   }
}

export default DetailAPI