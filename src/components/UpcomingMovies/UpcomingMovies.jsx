import UpcomingMoviesNavbar from "./UpcomingMoviesNavbar";
import UpcomingMoviesList from "./UpcomingMoviesList";
import { useState, useEffect } from "react";
import UpcomingMoviesAPI from "./../../apis/upcoming.api";

const Initial_UpcomingMovies = {
	data: [],
	page: 0,
};

const UpcomingMovies = () => {
	const [movies, setMovies] = useState(Initial_UpcomingMovies);

	useEffect(() => {
		UpcomingMoviesAPI.getUpcomingMovies().then((result) =>
			setMovies({
				data: result.data.results,
			})
		);
	}, []);

	return (
		<section className="w-full bg-gradient-to-b from-soft-gray to-black p-6 md:p-16">
			<UpcomingMoviesNavbar />
			<UpcomingMoviesList movies={movies} />
		</section>
	);
};

export default UpcomingMovies;
