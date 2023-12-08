import { axiosInstance } from "../configs/axiosInstance";

const MoviesAPI = {
    async getMovies(genreId, page, sortBy) {
        try {
            const response = await axiosInstance.get(`/discover/movie?page=${page}&with_genres=${genreId}&sort_by=${sortBy}`);
            return response
        } catch (error) {
            const { message } = error.response.data;
            throw new Error(message)
        }
    },
    async searchMovie(keyword, page) {
        try {
            const response = await axiosInstance.get(`/search/movie?query=${keyword}&page=${page}`)
            return response
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message)
        }
    },
    async genresMovie() {
        try {
            const response = await axiosInstance.get(`/genre/movie/list`)
            return response
        } catch (err) {
            const { message } = err.response.data;
            throw new Error(message)
        }
    }
}

export default MoviesAPI