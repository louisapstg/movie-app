import Card from "../Card/Card";

const UpcomingMoviesList = () => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	);
};

export default UpcomingMoviesList;
