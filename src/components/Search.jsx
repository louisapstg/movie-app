/* eslint-disable react/prop-types */
import { useState } from "react";
import searchIcon from "../assets/svg/search-symbol.svg";

const Search = ({ setKeyword }) => {
	const [inputValue, setInputValue] = useState("");
	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		if (!inputValue || inputValue.trim() == "") return;
		setKeyword(inputValue);
	};

	const clearSearch = (e) => {
		e.preventDefault();
		setInputValue("");
		setKeyword("");
	};

	return (
		<div className="flex mt-6">
			<button className="mx-4" onClick={clearSearch}>
				Clear Search
			</button>
			<div className="inline relative">
				<input
					type="text"
					className="block w-3/4 md:w-full border border-highlight bg-black rounded-full h-9 pl-4 pr-12 py-5 text-slate-200"
					placeholder="Search..."
					value={inputValue}
					onChange={handleInputChange}
				/>
				<button className="absolute top-2 left-32 md:left-56" onClick={handleSearch}>
					<svg>
						<image href={searchIcon} />
					</svg>
				</button>
			</div>
		</div>
	);
};

export default Search;
