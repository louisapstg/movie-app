/* eslint-disable react/prop-types */
import Card from "./Card/Card";
const ListData = ({ datas }) => {
	return (
		<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-2 md:gap-4">
			{datas.data?.map((data) => {
				return <Card key={data.id} data={data} />;
			})}
		</div>
	);
};

export default ListData;
