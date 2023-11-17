/* eslint-disable react/prop-types */
const DetailImage = ({ poster_path, original_title }) => {
	return (
		<img
			src={`https://image.tmdb.org/t/p/w300${poster_path}`}
			alt={original_title}
			className="max-h-[426px] h-52 lg:h-full md:mt-5 md:mb-20"
		/>
	);
};

export default DetailImage;
