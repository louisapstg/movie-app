import { useState, useEffect } from "react";
import UpcomingMoviesAPI from "../apis/upcoming.api";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";
import useHook from "./../hooks/useHook";

const UpcomingMovies = () => {
	const [movies, setMovies] = useState([]);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.upcoming.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page, setPage } = useHook();

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		UpcomingMoviesAPI.getUpcomingMovies(page).then((result) => {
			setMovies(result.data);
			dispatch(setLoaderFetchData(false));
		});
	}, [loading, dispatch, page]);

	return (
		<section
			id="upcoming"
			className="w-full bg-gradient-to-b from-soft-gray to-black p-6 md:p-16"
		>
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Upcoming</div>
			</div>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination page={page} setPage={setPage} total_pages={movies.total_pages} />
		</section>
	);
};

export default UpcomingMovies;
