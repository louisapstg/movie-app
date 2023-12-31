/* eslint-disable react/prop-types */
import Card from "./Card";
import CardSkeleton from "./Skeleton";
const ListData = ({ datas, loaderFetchData, url }) => {
	return (
		<div>
			{loaderFetchData ? (
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-4">
					{Array.from({ length: 20 }).map((_, id) => {
						return <CardSkeleton key={id} />;
					})}
				</div>
			) : (
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-4">
					{datas?.map((data, id) => {
						return <Card key={id} data={data} url={url} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ListData;
