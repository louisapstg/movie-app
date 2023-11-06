import { axiosInstance } from "../configs/axiosInstance";

const MoviesAPI = {
   async getMovies(page) {
      try {
         const config = {
            params: {
               page
            }
         }
         const response = await axiosInstance.get("/discover/movie", config)
         return response
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message)
      }
   },
   async searchMovie(keyword) {
      try {
         const response = await axiosInstance.get(`/search/movie?query=${keyword}`)
         return response
      } catch (err) {
         const { message } = err.response.data;
         throw new Error(message)
      }
   }
}

export default MoviesAPI