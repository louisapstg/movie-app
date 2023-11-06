import { useState, useEffect } from "react";
import UpcomingMoviesAPI from "../apis/upcoming.api";
import ListData from "./ListData";

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
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Upcoming</div>
			</div>
			<ListData datas={movies} />
		</section>
	);
};

export default UpcomingMovies;
