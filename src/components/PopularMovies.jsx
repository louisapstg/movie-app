import { useEffect, useState } from "react";
import PopularMoviesAPI from "../apis/popular.api";
import ListData from "./ListData";

const InitialPopularMovies = {
	data: [],
	page: 0,
};

const PopularMovies = () => {
	const [movies, setMovies] = useState(InitialPopularMovies);

	useEffect(() => {
		PopularMoviesAPI.getPopularMovies().then((result) =>
			setMovies({
				data: result.data.results,
			})
		);
	}, []);

	return (
		<section className="w-full bg-gradient-to-b from-black to-soft-gray p-6 md:p-16">
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Trending</div>
			</div>
			<ListData datas={movies} />
		</section>
	);
};

export default PopularMovies;
