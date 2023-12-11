/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import useHook from "./../hooks/useHook";
import Pagination from "./Pagination";
import { fetchPopular } from "../stores/features/popularSlice";
import { debounce } from "lodash";

const PopularMovies = () => {
	const dispatch = useDispatch();
	const { data: movies, loading, total_pages } = useSelector((state) => state.popular);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page: localPage } = useHook();

	const fetchData = debounce(() => {
		dispatch(setLoaderFetchData(true));
		try {
			dispatch(fetchPopular(localPage));
		} catch (e) {
			alert(e);
		} finally {
			dispatch(setLoaderFetchData(false));
		}
	}, 500);

	useEffect(() => {
		fetchData();
	}, [dispatch, localPage, loading]);

	return (
		<section className="w-full bg-gradient-to-b from-black to-soft-gray p-6 md:p-16">
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Trending</div>
			</div>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination total_pages={total_pages} />
		</section>
	);
};

export default PopularMovies;
