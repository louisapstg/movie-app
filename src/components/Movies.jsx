import { useEffect, useState } from "react";
import MoviesAPI from "../apis/movies.api";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";

const InitialMovies = {
	data: [],
};

const Movies = () => {
	const [movies, setMovies] = useState(InitialMovies);
	const { keyword, setKeyword, debounceKeyword } = useHook();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.movies.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);

	useEffect(() => {
		if (debounceKeyword) {
			MoviesAPI.searchMovie(debounceKeyword.toLowerCase(), 1000).then((results) => {
				setMovies({ data: results.data });
			});
		} else {
			dispatch(setLoaderFetchData(true));
			MoviesAPI.getMovies().then((results) => {
				setMovies({
					data: results.data,
				});
				dispatch(setLoaderFetchData(false));
			});
		}
	}, [debounceKeyword, loading, dispatch]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav keyword={keyword} setKeyword={setKeyword}>
				Movie List
			</ChildNav>
			<ListData datas={movies} loaderFetchData={loaderFetchData} />
		</section>
	);
};

export default Movies;
