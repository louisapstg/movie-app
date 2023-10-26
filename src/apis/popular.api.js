import { axiosInstance } from "../configs/axiosInstance"

const PopularMoviesAPI = {
   async getPopularMovies(page) {
      try {
         const config = {
            params: {
               page
            }
         };
         const response = await axiosInstance.get("/movie/popular", config);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   }
}

export default PopularMoviesAPI