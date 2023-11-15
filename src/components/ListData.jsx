/* eslint-disable react/prop-types */
import Card from "./Card/Card";
import CardSkeleton from "./Skeleton/CardSkeleton";
const ListData = ({ datas, loaderFetchData }) => {
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
					{datas.data.results?.map((data) => {
						return <Card key={data.id} data={data} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ListData;
