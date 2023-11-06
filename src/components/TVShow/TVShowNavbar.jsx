/* eslint-disable react/prop-types */
import Search from "../Search";

const TVShowNavbar = ({ keyword, setKeyword }) => {
	return (
		<div className="flex my-10 justify-between text-white">
			<div className="self-center mr-4 text-xl md:text-2xl lg:text-4xl">Movies List</div>
			<div>SortBy</div>
			<Search keyword={keyword} setKeyword={setKeyword} />
		</div>
	);
};

export default TVShowNavbar;
