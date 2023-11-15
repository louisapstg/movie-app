import { axiosInstance } from "../configs/axiosInstance"

const UpcomingMoviesAPI = {
   async getUpcomingMovies(limit) {
      try {
         const config = {
            params: {
               limit
            }
         };
         const response = await axiosInstance.get(`/movie/upcoming`, config);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   },
}

export default UpcomingMoviesAPI