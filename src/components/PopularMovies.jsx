import { useEffect, useState } from "react";
import PopularMoviesAPI from "../apis/popular.api";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";

const InitialPopularMovies = {
	data: [],
};

const PopularMovies = () => {
	const [movies, setMovies] = useState(InitialPopularMovies);
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.popular.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		PopularMoviesAPI.getPopularMovies().then((result) => {
			setMovies({
				data: result.data,
			});
			dispatch(setLoaderFetchData(false));
		});
	}, [loading, dispatch]);

	return (
		<section className="w-full bg-gradient-to-b from-black to-soft-gray p-6 md:p-16">
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Trending</div>
			</div>
			<ListData datas={movies} loaderFetchData={loaderFetchData} />
		</section>
	);
};

export default PopularMovies;
