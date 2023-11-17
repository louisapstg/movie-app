/* eslint-disable react/prop-types */
import Card from "./Card";
import CardSkeleton from "./Skeleton/CardSkeleton";
const ListData = ({ datas, loaderFetchData, url }) => {
	return (
		<div>
			{loaderFetchData ? (
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-2 md:gap-4">
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
					<CardSkeleton />
				</div>
			) : (
				<div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-10 gap-2 md:gap-4">
					{datas.results?.map((data, id) => {
						return <Card key={id} data={data} url={url} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ListData;
