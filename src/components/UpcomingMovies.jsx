import { useState, useEffect } from "react";
import UpcomingMoviesAPI from "../apis/upcoming.api";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";

const Initial_UpcomingMovies = {
	data: [],
};

const UpcomingMovies = () => {
	const [movies, setMovies] = useState(Initial_UpcomingMovies);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.upcoming.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		UpcomingMoviesAPI.getUpcomingMovies().then((result) => {
			setMovies({
				data: result.data,
			});
			dispatch(setLoaderFetchData(false));
		});
	}, [loading, dispatch]);

	return (
		<section className="w-full bg-gradient-to-b from-soft-gray to-black p-6 md:p-16">
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Upcoming</div>
			</div>
			<ListData datas={movies} loaderFetchData={loaderFetchData} />
		</section>
	);
};

export default UpcomingMovies;
