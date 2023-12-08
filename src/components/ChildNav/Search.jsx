import { useState } from "react";
import searchIcon from "../../assets/svg/search-symbol.svg";
import clearIcon from "../../assets/svg/clear.svg";
import useHook from "../../hooks/useHook";

const Search = () => {
	const [inputValue, setInputValue] = useState("");
	const { setKeyword } = useHook();

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
			<div className="inline relative">
				<input
					type="text"
					className="block w-3/4 md:w-full border border-highlight bg-black rounded-full h-9 pl-4 pr-16 py-5 text-slate-200"
					placeholder="Search..."
					value={inputValue}
					onChange={handleInputChange}
				/>
				{inputValue ? (
					<div>
						<button className="absolute top-2 left-28 md:left-56" onClick={clearSearch}>
							<svg>
								<image href={clearIcon} />
							</svg>
						</button>
						<button
							className="absolute top-2 left-32 md:left-[15.5rem]"
							onClick={handleSearch}
						>
							<svg>
								<image href={searchIcon} />
							</svg>
						</button>
					</div>
				) : (
					""
				)}
			</div>
		</div>
	);
};

export default Search;
