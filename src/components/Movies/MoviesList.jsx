/* eslint-disable react/prop-types */
import Card from "../Card/Card";

const MoviesList = ({ movies }) => {
	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-4">
			{movies.data?.map((movie) => {
				return <Card key={movie.id} data={movie} />;
			})}
		</div>
	);
};

export default MoviesList;
