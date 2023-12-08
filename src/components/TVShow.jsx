import { useEffect } from "react";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import useHook from "../hooks/useHook";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";
import { fetchTvShow, genresTvShow, searchTvShow } from "../stores/features/tvShowSlice";
import { useDebounce } from "use-debounce";

const TVShow = () => {
	const dispatch = useDispatch();
	const { data: data, genres, loading, total_pages } = useSelector((state) => state.tvshow);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { keyword, page, filter, genreId, sortBy } = useHook();
	const [debounceKeyword] = useDebounce(keyword, 0);

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		try {
			if (debounceKeyword) {
				dispatch(searchTvShow({ keyword: debounceKeyword.toLowerCase(), page: page }));
			} else {
				dispatch(fetchTvShow({ genreId, page, sortBy }));
				dispatch(genresTvShow());
			}
		} catch (err) {
			alert(err);
		} finally {
			dispatch(setLoaderFetchData(false));
		}
	}, [dispatch, genreId, page, debounceKeyword, loading, sortBy]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav genres={genres} filter={filter}>
				Tv Show List
			</ChildNav>
			<ListData datas={data} url={"tv"} loaderFetchData={loaderFetchData} />
			<Pagination total_pages={total_pages} />
		</section>
	);
};

export default TVShow;
