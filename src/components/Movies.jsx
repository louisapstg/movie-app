/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";
import { batch, shallowEqual, useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";
import { fetchMovies, genresMovies, searchMovies } from "../stores/features/moviesSlice";
import { useDebounce } from "use-debounce";
import { debounce } from "lodash";

const Movies = () => {
	const dispatch = useDispatch();
	const {
		data: movies,
		genres,
		total_pages,
	} = useSelector((state) => state.movies, shallowEqual);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { keyword, page, filter, genreId, sortBy } = useHook();
	const [debounceKeyword] = useDebounce(keyword, 0);

	const fetchData = debounce(() => {
		dispatch(setLoaderFetchData(true));
		try {
			if (debounceKeyword) {
				dispatch(searchMovies({ keyword: debounceKeyword.toLowerCase(), page: page }));
			} else {
				batch(() => {
					dispatch(fetchMovies({ genreId, page, sortBy }));
					dispatch(genresMovies());
				});
			}
		} catch (err) {
			alert(err);
		} finally {
			dispatch(setLoaderFetchData(false));
		}
	}, 500);

	useEffect(() => {
		fetchData();
		return () => {
			fetchData.cancel();
		};
	}, [dispatch, genreId, page, debounceKeyword, sortBy]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav genres={genres} filter={filter}>
				Movie List
			</ChildNav>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination total_pages={total_pages} />
		</section>
	);
};

export default Movies;
