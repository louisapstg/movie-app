import { axiosInstance } from "../configs/axiosInstance"

const UpcomingMoviesAPI = {
   async getUpcomingMovies(page) {
      try {
         const response = await axiosInstance.get(`/movie/upcoming?page=${page}`);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   },
}

export default UpcomingMoviesAPI