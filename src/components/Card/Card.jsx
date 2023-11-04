/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
import DataContext from "./../../utils/DataContext";
const Card = ({ data }) => {
	const {
		id,
		title,
		genre_ids,
		original_language,
		overview,
		popularity,
		poster_path,
		release_date,
		vote_average,
		vote_count,
	} = data || {};

	const dataContextValue = {
		id,
		title,
		genre_ids,
		original_language,
		overview,
		popularity,
		poster_path,
		release_date,
		vote_average,
		vote_count,
	};

	return (
		// <DataContext.Provider value={dataContextValue}>
		// 	<Link
		// 		to={{
		// 			pathname: `/movie/${id}`,
		// 			state: dataContextValue,
		// 		}}
		// 	>
		<div className="max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<CardImage data={data} />
			<CardContent data={data} />
		</div>
		// 	</Link>
		// </DataContext.Provider>
	);
};

export default Card;
