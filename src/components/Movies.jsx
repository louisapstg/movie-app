import { useEffect, useState } from "react";
import MoviesAPI from "../apis/movies.api";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";

const InitialMovies = {
	data: [],
};

const Movies = () => {
	const [movies, setMovies] = useState(InitialMovies);

	const { keyword, setKeyword, debounceKeyword } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			MoviesAPI.searchMovie(debounceKeyword.toLowerCase()).then((results) => {
				setMovies({ data: results.data.results });
			});
		} else {
			MoviesAPI.getMovies().then((results) => {
				setMovies({ data: results.data.results });
			});
		}
	}, [debounceKeyword]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav keyword={keyword} setKeyword={setKeyword}>
				Movie List
			</ChildNav>
			<ListData datas={movies} />
		</section>
	);
};

export default Movies;
