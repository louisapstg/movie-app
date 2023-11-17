import { useState } from "react";
import { useDebounce } from "use-debounce";

const useHook = () => {
	const [keyword, setKeyword] = useState("");
	const [debounceKeyword] = useDebounce(keyword, 500);
	const [page, setPage] = useState(1);

	return {
		page,
		setPage,
		keyword,
		setKeyword,
		debounceKeyword,
	};
};

export default useHook;
