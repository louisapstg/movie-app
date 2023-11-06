import { useEffect, useState } from "react";
import TvAPI from "./../../apis/tv.api";
import TVShowNavbar from "./TVShowNavbar";
import TVShowList from "./TVShowList";
import useHook from "../../hooks/useHook";

const InitialData = {
	data: [],
};

const TVShow = () => {
	const [data, setData] = useState(InitialData);

	const { keyword, setKeyword, debounceKeyword } = useHook();

	useEffect(() => {
		if (debounceKeyword) {
			TvAPI.searchTvShow(debounceKeyword.toLowerCase()).then((results) => {
				setData({ data: results.data.results });
			});
		} else {
			TvAPI.getTvShow().then((results) => {
				setData({ data: results.data.results });
			});
		}
	}, [debounceKeyword]);

	return (
		<section className="w-full bg-gradient-to-b  from-black to-soft-gray p-6 md:p-16">
			<TVShowNavbar keyword={keyword} setKeyword={setKeyword} />
			<TVShowList datas={data} />
		</section>
	);
};

export default TVShow;
