/* eslint-disable react/prop-types */
const CardContent = ({ data }) => {
	const { title, name, release_date, first_air_date } = data;
	const date = new Date(release_date || first_air_date);
	const year = date.getFullYear();
	return (
		<div className="p-2 text-white">
			<div className="grid grid-rows-2 gap-0 truncate">
				<h5 className="mb-2 text-xs md:text-sm tracking-tight truncate">{title || name}</h5>
				<div className="text-xs md:text-xs text-highlight">{year ? year : "N/A"}</div>
			</div>
		</div>
	);
};

export default CardContent;
