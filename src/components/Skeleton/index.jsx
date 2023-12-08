import ImageSkeleton from "./ImageSkeleton";
import ContentSkeleton from "./ContentSkeleton";
const CardSkeleton = () => {
	return (
		<div
			role="status"
			className="max-w-[200px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
		>
			<ImageSkeleton />
			<ContentSkeleton />
		</div>
	);
};

export default CardSkeleton;
