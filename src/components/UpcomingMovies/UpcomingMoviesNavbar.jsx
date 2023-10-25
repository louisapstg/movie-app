import UpcomingMoviesNavbarList from "./UpcomingMoviesNavbarList";

const UpcomingMoviesNavbar = () => {
	return (
		<div className="flex justify-between items-center text-white mb-10">
			<div className="text-4xl">Upcoming Movies</div>
			<div>
				<UpcomingMoviesNavbarList />
			</div>
		</div>
	);
};

export default UpcomingMoviesNavbar;
