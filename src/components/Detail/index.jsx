/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import DetailAPI from "../../apis/detail.api";
import DetailImage from "./DetailImage";
import DetailTitle from "./DetailTitle";
import DetailSubTitle from "./DetailSubTitle";
import Review from "./Review";

const Detail = ({ id, url }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		DetailAPI.getDetailAPI(url, id).then((results) => {
			setData(results.data);
		});
	}, [id, url]);

	console.log(data);

	const {
		backdrop_path,
		budget,
		genres,
		homepage,
		original_language,
		original_title,
		name,
		overview,
		popularity,
		poster_path,
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

	const backgroundStyle = {
		backgroundImage: backdrop_path
			? `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.9)), url('https://image.tmdb.org/t/p/original${backdrop_path}')`
			: "none",
		backgroundSize: "cover",
		backgroundPosition: "center",
	};

	return (
		<section
			style={backgroundStyle}
			className="flex flex-col md:flex-row mx-auto p-6 mt-16 md:p-16 md:mt-16 bg-gradient-to-b from-black to-soft-gray text-white"
		>
			<DetailImage poster_path={poster_path} original_title={original_title} />
			<div className="flex flex-col p-1 lg:p-12">
				<DetailTitle original_title={original_title} homepage={homepage} name={name} />
				<DetailSubTitle
					genres={genres}
					original_language={original_language}
					runtime={runtime}
					year={release_date || first_air_date}
					url={url}
					number_of_episodes={number_of_episodes}
				/>
				<div className="p-5">{overview}</div>
				<div className="p-5">&quot;{tagline}&quot;</div>
				<Review
					popularity={popularity}
					vote_average={vote_average}
					vote_count={vote_count}
				/>
				<div className="p-5 font-extrabold text-highlight uppercase text-sm">{status}</div>
			</div>
		</section>
	);
};

export default Detail;
