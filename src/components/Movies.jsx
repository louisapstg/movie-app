import { useEffect, useState } from "react";
import MoviesAPI from "../apis/movies.api";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";

const Movies = () => {
	const [movies, setMovies] = useState([]);
	const [genres, setGenres] = useState([]);
	const { keyword, setKeyword, debounceKeyword } = useHook();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.movies.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page, setPage, filter, setFilter } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			MoviesAPI.searchMovie(debounceKeyword.toLowerCase(), page).then((results) => {
				setMovies(results.data);
			});
		} else {
			dispatch(setLoaderFetchData(true));
			MoviesAPI.getMovies(page).then((results) => {
				setMovies(results.data);
				dispatch(setLoaderFetchData(false));
			});
		}
	}, [debounceKeyword, loading, dispatch, page]);

	useEffect(() => {
		MoviesAPI.genresMovie().then((results) => {
			setGenres(results.data);
		});
	}, []);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav
				genres={genres}
				filter={filter}
				setFilter={setFilter}
				keyword={keyword}
				setKeyword={setKeyword}
			>
				Movie List
			</ChildNav>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination page={page} setPage={setPage} total_pages={movies.total_pages} />
		</section>
	);
};

export default Movies;
