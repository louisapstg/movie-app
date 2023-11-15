import { axiosInstance } from "../configs/axiosInstance";

const MoviesAPI = {
   async getMovies() {
      try {
         const response = await axiosInstance.get("/discover/movie")
         return response
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message)
      }
   },
   async searchMovie(keyword, limit) {
      try {
         const config = {
            params: {
               limit,
            }
         }
         const response = await axiosInstance.get(`/search/movie?query=${keyword}`, config)
         return response
      } catch (err) {
         const { message } = err.response.data;
         throw new Error(message)
      }
   }
}

export default MoviesAPI