import { Navbar, Hero, UpcomingMovies, PopularMovies, Footer } from "../../components";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<UpcomingMovies />
			<PopularMovies />
			<Footer />
		</>
	);
};

export default Home;
