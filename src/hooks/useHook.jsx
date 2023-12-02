import { useState } from "react";
import { useDebounce } from "use-debounce";

const useHook = () => {
	const [keyword, setKeyword] = useState("");
	const [debounceKeyword] = useDebounce(keyword, 500);
	const [page, setPage] = useState(1);
	const [filter, setFilter] = useState("");

	return {
		page,
		setPage,
		filter,
		setFilter,
		keyword,
		setKeyword,
		debounceKeyword,
	};
};

export default useHook;
