import { axiosInstance } from "../configs/axiosInstance"

const PopularMoviesAPI = {
   async getPopularMovies() {
      try {
         const response = await axiosInstance.get(`/movie/popular`);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   }
}

export default PopularMoviesAPI