/* eslint-disable react/prop-types */
import star from "../../assets/svg/star.svg";
import people from "../../assets/svg/people.svg";
import PopularIcon from "../../assets/svg/popular.svg";
const Review = ({ popularity, vote_average, vote_count }) => {
	return (
		<div className="px-5 flex items-center text-base">
			<div className="flex items-center">
				<svg width={24} height={24}>
					<image href={PopularIcon} />
				</svg>
				{popularity}
			</div>
			<div className="flex items-center mx-4">
				<svg width={18} height={18}>
					<image href={star} />
				</svg>
				{vote_average}
			</div>
			<div className="flex items-center">
				<svg width={24} height={24}>
					<image href={people} />
				</svg>
				{vote_count}
			</div>
		</div>
	);
};

export default Review;
