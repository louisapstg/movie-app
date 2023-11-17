import { axiosInstance } from "../configs/axiosInstance"

const PopularMoviesAPI = {
   async getPopularMovies(page) {
      try {
         const response = await axiosInstance.get(`/movie/popular?page=${page}`);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   }
}

export default PopularMoviesAPI