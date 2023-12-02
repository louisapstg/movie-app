import { axiosInstance } from "../configs/axiosInstance"

const TvAPI = {
   async getTvShow(page) {
      try {
         const response = await axiosInstance.get(`/discover/tv?page=${page}`);
         return response;
      } catch (error) {
         const { message } = error.response.data
         throw new Error(message)
      }
   },
   async searchTvShow(keyword, page) {
      try {
         const response = await axiosInstance.get(`/search/tv?query=${keyword}&page=${page}`)
         return response
      } catch (error) {
         const { message } = error.response.data
         throw new Error(message)
      }
   },
   async genresTV() {
      try {
         const response = await axiosInstance.get(`/genre/tv/list`)
         return response
      } catch (error) {
         const { message } = error.response.data
         throw new Error(message)
      }
   }
}

export default TvAPI