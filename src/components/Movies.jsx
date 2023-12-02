import { useEffect } from "react";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";
import { fetchMovies, genresMovies, searchMovies } from "../stores/features/moviesSlice";

const Movies = () => {
	const dispatch = useDispatch();
	const { data: movies, genres, loading, total_pages } = useSelector((state) => state.movies);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { keyword, setKeyword, debounceKeyword, page, setPage, filter, setFilter } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			try {
				dispatch(searchMovies(debounceKeyword.toLowerCase(), page));
			} catch (err) {
				console.error(err);
			}
		} else {
			dispatch(setLoaderFetchData(true));
			try {
				dispatch(fetchMovies(page));
				dispatch(genresMovies());
				dispatch(setLoaderFetchData(false));
			} catch (err) {
				console.error(err);
			}
		}
	}, [dispatch, page, debounceKeyword, loading]);

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
			<Pagination page={page} setPage={setPage} total_pages={total_pages} />
		</section>
	);
};

export default Movies;
