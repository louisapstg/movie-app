/* eslint-disable react/prop-types */
import watchTime from "../../assets/svg/watch-later.svg";
import calender from "../../assets/svg/calender.svg";
const DetailSubTitle = ({ genres, runtime, year, url, number_of_episodes, original_language }) => {
	return (
		<div className="flex flex-col lg:flex-row lg:items-center p-1 lg:p-3">
			<div className="flex mb-3">
				<div className="bg-white rounded-sm text-black px-2 mx-2 uppercase">{url}</div>
				<div className="border rounded-sm border-white px-2 mx-2">HD</div>
				<div className="border rounded-sm border-white px-2 mx-2 uppercase">
					{original_language}
				</div>
			</div>
			<ul className="list-none flex justify-center items-center mx-6 border-b">
				{genres?.map((genre) => {
					return (
						<li key={genre.id} className="mx-1">
							{genre === genres[genres.length - 1]
								? `${genre.name}`
								: `${genre.name},`}
						</li>
					);
				})}
			</ul>
			<div className="flex m-2 items-center">
				<svg width={18} height={18} className="mr-1">
					<image href={watchTime} />
				</svg>
				{runtime ? `${runtime} min` : `${number_of_episodes} episodes`}
			</div>
			<div className="flex mx-2 items-center">
				<svg width={18} height={18} className="mr-1">
					<image href={calender} />
				</svg>
				{year}
			</div>
		</div>
	);
};

export default DetailSubTitle;
