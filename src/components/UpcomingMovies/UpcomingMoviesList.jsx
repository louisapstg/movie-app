/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const UpcomingMoviesList = ({ movies }) => {
	return (
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
			{movies.data?.map((movie) => {
				return <Card key={movie.id} data={movie} />;
			})}
		</div>
	);
};

export default UpcomingMoviesList;
