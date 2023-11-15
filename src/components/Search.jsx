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
		if (!inputValue) return;
		setKeyword(inputValue);
	};

	return (
		<div className="hidden md:inline relative">
			<input
				type="text"
				className="block w-full border border-highlight bg-black rounded-full h-9 pl-4 pr-12 py-5 text-slate-200"
				placeholder="Search..."
				value={inputValue}
				onChange={handleInputChange}
			/>
			<button className="absolute top-2 left-40" onClick={handleSearch}>
				<svg>
					<image href={searchIcon} />
				</svg>
			</button>
		</div>
	);
};

export default Search;
