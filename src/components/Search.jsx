import searchIcon from "../../public/search-symbol.svg";
import useHook from "../hooks/useHook";

const Search = () => {
	const { keyword, setKeyword } = useHook();
	return (
		<div className="hidden md:inline relative">
			<input
				type="text"
				className="block w-full border border-highlight bg-black rounded-full h-9 pl-4 pr-12 py-5 text-slate-200"
				placeholder="Search..."
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<svg className="absolute top-2 left-40">
				<image href={searchIcon} />
			</svg>
		</div>
	);
};

export default Search;
