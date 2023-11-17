/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailAPI from "../../apis/detail.api";
import DetailImage from "./DetailImage";
import DetailTitle from "./DetailTitle";
import DetailSubTitle from "./DetailSubTitle";
import star from "../../assets/svg/star.svg";
import people from "../../assets/svg/people.svg";

const Detail = ({ id, url }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		DetailAPI.getDetailAPI(url, id).then((results) => {
			setData(results.data);
		});
	}, [id, url]);

	const {
		backdrop_path,
		belongs_to_collection,
		budget,
		genres,
		homepage,
		original_language,
		original_title,
		name,
		overview,
		popularity,
		poster_path,
		production_companies,
		production_countries,
		release_date,
		first_air_date,
		revenue,
		runtime,
		number_of_episodes,
		status,
		tagline,
		vote_average,
		vote_count,
	} = data;

	const date = new Date(release_date || first_air_date);
	const year = date.getFullYear();

	const backgroundStyle = {
		backgroundImage: backdrop_path
			? `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.9)), url('https://image.tmdb.org/t/p/original${backdrop_path}')`
			: "none",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<section
			style={backgroundStyle}
			className="flex flex-row md:flex-row mx-auto p-6 md:p-16 md:mt-16 bg-gradient-to-b from-black to-soft-gray text-white"
		>
			<DetailImage poster_path={poster_path} original_title={original_title} />
			<div className="flex flex-col p-12">
				<DetailTitle original_title={original_title} name={name} />
				<DetailSubTitle
					genres={genres}
					runtime={runtime}
					year={year}
					url={url}
					number_of_episodes={number_of_episodes}
				/>
				<div className="p-5">{overview}</div>
				<div className="px-5 flex items-center text-2xl">
					<div className="flex items-center">
						<svg width={36} height={36} className="mr-2">
							<image href={star} />
						</svg>
						{vote_average}
					</div>
					<div className="flex items-center">
						<svg width={48} height={48} className="ml-2">
							<image href={people} />
						</svg>
						{vote_count}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Detail;
