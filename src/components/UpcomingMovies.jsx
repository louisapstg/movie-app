import { useEffect } from "react";
import ListData from "./ListData";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";
import useHook from "./../hooks/useHook";
import { fetchUpcoming } from "../stores/features/upcomingSlice";

const UpcomingMovies = () => {
	const dispatch = useDispatch();
	const { data: movies, loading, total_pages } = useSelector((state) => state.upcoming);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page: localPage } = useHook();

	useEffect(() => {
		dispatch(setLoaderFetchData(true));
		try {
			dispatch(fetchUpcoming(localPage));
		} catch (e) {
			alert(e);
		} finally {
			dispatch(setLoaderFetchData(false));
		}
	}, [dispatch, localPage, loading]);

	return (
		<section
			id="upcoming"
			className="w-full bg-gradient-to-b from-soft-gray to-black p-6 md:p-16"
		>
			<div className="mb-10">
				<div className="text-xl md:text-2xl lg:text-4xl text-white">Upcoming</div>
			</div>
			<ListData datas={movies} url={"movie"} loaderFetchData={loaderFetchData} />
			<Pagination total_pages={total_pages} />
		</section>
	);
};

export default UpcomingMovies;
