import { useEffect, useState } from "react";
import TvAPI from "../apis/tv.api";
import useHook from "../hooks/useHook";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";

const InitialData = {
	data: [],
};

const TVShow = () => {
	const [data, setData] = useState(InitialData);
	const { keyword, setKeyword, debounceKeyword } = useHook();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.tvshow.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);

	useEffect(() => {
		if (debounceKeyword) {
			TvAPI.searchTvShow(debounceKeyword.toLowerCase()).then((results) => {
				setData({ data: results.data });
			});
		} else {
			dispatch(setLoaderFetchData(true));
			TvAPI.getTvShow().then((results) => {
				setData({ data: results.data });
				dispatch(setLoaderFetchData(false));
			});
		}
	}, [debounceKeyword, loading, dispatch]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav keyword={keyword} setKeyword={setKeyword}>
				Tv Show List
			</ChildNav>
			<ListData datas={data} loaderFetchData={loaderFetchData} />
		</section>
	);
};

export default TVShow;
