import { useEffect, useState } from "react";
import MoviesAPI from "../apis/movies.api";
import ListData from "./ListData";
import ChildNav from "./ChildNav";

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
			<ChildNav>Movie List</ChildNav>
			<ListData datas={movies} />
		</section>
	);
};

export default Movies;
