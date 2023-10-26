import UpcomingMoviesNavbarList from "./UpcomingMoviesNavbarList";

const UpcomingMoviesNavbar = () => {
	return (
		<div className="flex justify-between items-center text-white mb-10">
			<div className="text-xl md:text-2xl lg:text-4xl">Upcoming</div>
			<div>
				<UpcomingMoviesNavbarList />
			</div>
		</div>
	);
};

export default UpcomingMoviesNavbar;
