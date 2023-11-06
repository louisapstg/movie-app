/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import CardContent from "./CardContent";
import CardImage from "./CardImage";
const Card = ({ data }) => {
	return (
		<Link to={`/movie/${data.id}`}>
			<div className="max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
				<CardImage data={data} />
				<CardContent data={data} />
			</div>
		</Link>
	);
};

export default Card;
