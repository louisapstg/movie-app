import CardContent from "./CardContent";
import CardImage from "./CardImage";
const Card = () => {
	return (
		<div className="max-w-[260px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
			<CardImage />
			<CardContent />
		</div>
	);
};

export default Card;
