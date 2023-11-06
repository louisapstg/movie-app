import { axiosInstance } from "../configs/axiosInstance"

const TvAPI = {
   async getTvShow(page) {
      try {
         const config = {
            params: {
               page
            }
         }
         const response = await axiosInstance.get("/discover/tv", config);
         return response;
      } catch (error) {
         const { message } = error.response.data
         throw new Error(message)
      }
   },
   async searchTvShow(keyword) {
      try {
         const response = await axiosInstance.get(`/search/tv?query=${keyword}`)
         return response
      } catch (error) {
         const { message } = error.response.data
         throw new Error(message)
      }
   }
}

export default TvAPI