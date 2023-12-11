/* eslint-disable react/prop-types */
const DetailTitle = ({ original_title, name, homepage }) => {
	return (
		<div>
			{homepage ? (
				<a
					href={homepage}
					target="_blank"
					rel="noopener noreferrer"
					className="text-highlight text-2xl md:text-4xl lg:text-6xl p-3 text-gradient font-bold"
				>
					{original_title || name}
				</a>
			) : (
				<div className="text-highlight text-2xl md:text-4xl lg:text-6xl p-3 text-gradient font-bold">
					{original_title || name}
				</div>
			)}
		</div>
	);
};

export default DetailTitle;
