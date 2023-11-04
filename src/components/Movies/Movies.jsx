import MoviesNavbar from "./MoviesNavbar";
import MoviesList from "./MoviesList";
import { useEffect, useState } from "react";
import MoviesAPI from "./../../apis/movies.api";

const InitialMovies = {
	data: [],
};

const Movies = () => {
	const [movies, setMovies] = useState(InitialMovies);

	useEffect(() => {
		MoviesAPI.getMovies().then((result) =>
			setMovies({
				data: result.data.results,
			})
		);
	}, []);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<MoviesNavbar />
			<MoviesList movies={movies} />
		</section>
	);
};

export default Movies;
