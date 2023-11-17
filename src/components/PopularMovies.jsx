import { useEffect, useState } from "react";
import PopularMoviesAPI from "../apis/popular.api";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import useHook from "./../hooks/useHook";
import Pagination from "./Pagination";

const PopularMovies = () => {
	const [movies, setMovies] = useState([]);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.popular.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page, setPage } = useHook();

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		PopularMoviesAPI.getPopularMovies(page).then((result) => {
			setMovies(result.data);
			dispatch(setLoaderFetchData(false));
		});
	}, [loading, dispatch, page]);

	return (
		<section className="w-full bg-gradient-to-b from-black to-soft-gray p-6 md:p-16">
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Trending</div>
			</div>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination page={page} setPage={setPage} total_pages={movies.total_pages} />
		</section>
	);
};

export default PopularMovies;
