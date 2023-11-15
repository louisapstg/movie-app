/* eslint-disable react/prop-types */
const CardImage = ({ data }) => {
	const { poster_path } = data;
	return (
		<img
			className="rounded-t-lg max-h-[337px] hover:scale-[102%] transition-all"
			src={`https://image.tmdb.org/t/p/w500${poster_path}`}
			alt=""
		/>
	);
};

export default CardImage;
