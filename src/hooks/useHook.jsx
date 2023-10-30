import { useState } from "react";
import { useDebounce } from "use-debounce";

const useHook = () => {
	const [keyword, setKeyword] = useState("");
	const [debounceKeyword] = useDebounce(keyword, 0);
	console.log(debounceKeyword);

	return {
		keyword,
		setKeyword,
		debounceKeyword,
	};
};

export default useHook;
