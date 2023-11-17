/* eslint-disable react/prop-types */
const DetailTitle = ({ original_title, name }) => {
	return (
		<div className="text-highlight text-6xl p-3 text-gradient font-bold">
			{original_title || name}
		</div>
	);
};

export default DetailTitle;
