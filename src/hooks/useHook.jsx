import { useDispatch, useSelector } from "react-redux";
import {
	setFilter,
	setGenreId,
	setKeyword,
	setPage,
	setSortBy,
} from "../stores/features/globalStateSlice";

const useHook = () => {
	const dispatch = useDispatch();
	const { keyword, page, filter, genreId, sortBy } = useSelector((state) => state.globalState);

	const setKeywordHandler = (value) => {
		dispatch(setKeyword(value));
	};

	const setPageHandler = (value) => {
		dispatch(setPage(value));
	};

	const setFilterHandler = (value) => {
		dispatch(setFilter(value));
	};

	const setGenreIdHandler = (value) => {
		dispatch(setGenreId(value));
	};

	const setSortByHandler = (value) => {
		dispatch(setSortBy(value));
	};

	return {
		keyword,
		setKeyword: setKeywordHandler,
		page,
		setPage: setPageHandler,
		filter,
		setFilter: setFilterHandler,
		genreId,
		setGenreId: setGenreIdHandler,
		sortBy,
		setSortBy: setSortByHandler,
	};
};

export default useHook;
