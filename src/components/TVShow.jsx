import { useEffect, useState } from "react";
import TvAPI from "../apis/tv.api";
import useHook from "../hooks/useHook";
import ListData from "./ListData";
import ChildNav from "./ChildNav";
import { useDispatch, useSelector } from "react-redux";
import { setLoaderFetchData } from "../stores/features/loaderFetchDataSlice";
import Pagination from "./Pagination";

const TVShow = () => {
	const [data, setData] = useState([]);
	const { keyword, setKeyword, debounceKeyword } = useHook();
	const dispatch = useDispatch();
	const loading = useSelector((state) => state.tvshow.loading);
	const loaderFetchData = useSelector((state) => state.loaderFetchData);
	const { page, setPage } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			TvAPI.searchTvShow(debounceKeyword.toLowerCase(), page).then((results) => {
				setData(results.data);
			});
		} else {
			dispatch(setLoaderFetchData(true));
			TvAPI.getTvShow(page).then((results) => {
				setData(results.data);
				dispatch(setLoaderFetchData(false));
			});
		}
	}, [debounceKeyword, loading, dispatch, page]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<ChildNav keyword={keyword} setKeyword={setKeyword}>
				Tv Show List
			</ChildNav>
			<ListData datas={data} url={"tv"} loaderFetchData={loaderFetchData} />
			<Pagination page={page} total_pages={data.total_pages} setPage={setPage} />
		</section>
	);
};

export default TVShow;
