import UpcomingMoviesNavbar from "./UpcomingMoviesNavbar";
import UpcomingMoviesList from "./UpcomingMoviesList";

const UpcomingMovies = () => {
	return (
		<section className="w-full bg-gradient-to-b from-soft-gray to-black p-6 md:p-16">
			<UpcomingMoviesNavbar />
			<UpcomingMoviesList />
		</section>
	);
};

export default UpcomingMovies;
