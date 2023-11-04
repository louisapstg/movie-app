import Search from "../Search";

const MoviesNavbar = () => {
	return (
		<div className="flex my-10 justify-between text-white">
			<div className="self-center mr-4 text-xl md:text-2xl lg:text-4xl">Movies List</div>
			<div>SortBy</div>
			<Search />
		</div>
	);
};

export default MoviesNavbar;
