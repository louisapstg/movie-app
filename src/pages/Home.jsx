import { Navbar, Hero, UpcomingMovies, TrendingMovies, Footer } from "../components";

const Home = () => {
	return (
		<>
			<Navbar />
			<Hero />
			<UpcomingMovies />
			<TrendingMovies />
			<Footer />
		</>
	);
};

export default Home;
