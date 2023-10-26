/* eslint-disable react/prop-types */
import voteAverage from "../../assets/star.svg";
import people from "../../assets/people.svg";

const CardContent = ({ data }) => {
	const { title, release_date, original_language, vote_count, vote_average } = data || {};
	const date = new Date(release_date);
	const year = date.getFullYear();
	return (
		<div className="p-5 grid grid-rows-2 gap-2 text-white">
			<div className="grid grid-cols-3 text-lg gap-3">
				<h5 className="mb-2font-bold tracking-tight col-span-2 truncate">{title}</h5>
				<div className="justify-self-end text-highlight">{year}</div>
			</div>
			<div className="grid grid-cols-3 gap-3">
				<div className="border border-white rounded-md w-1/2 text-center uppercase">
					{original_language}
				</div>
				<div className="grid grid-cols-2 col-span-2">
					<div className="justify-self-end flex items-center">
						<svg className="mx-0.5" width="14" height="14">
							<image href={people} />
						</svg>
						{vote_count}
					</div>
					<div className="justify-self-end flex items-center">
						<svg className="mx-0.5" width="12" height="12">
							<image href={voteAverage} />
						</svg>
						{vote_average}
					</div>
				</div>
			</div>
		</div>
	);
};

export default CardContent;

// title, original_language, release_date, vote_count, vote_average
