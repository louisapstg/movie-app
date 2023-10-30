import { axiosInstance } from "../configs/axiosInstance"

const UpcomingMoviesAPI = {
   async getUpcomingMovies(page) {
      try {
         const config = {
            params: {
               page
            }
         };
         const response = await axiosInstance.get("/movie/upcoming", config);
         return response;
      } catch (error) {
         const { message } = error.response.data;
         throw new Error(message);
      }
   },
   // async searchUpcomingMovies(keyword, page) {
   //    try {
   //       const config = {
   //          params: {
   //             page
   //          }
   //       }
   //       const response = await axiosInstance.get(`/search/movie?query=${keyword}`, config);
   //       return response;
   //    } catch (error) {
   //       const { message } = error.response.data;
   //       throw new Error(message);
   //    }
   // }
}

export default UpcomingMoviesAPI