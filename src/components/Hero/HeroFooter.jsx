import playIcon from "../../assets/svg/play-symbol.svg";

const HeroFooter = () => {
	return (
		<>
			<div className="flex flex-row pt-2">
				<div className="bg-white rounded-sm text-black pt-0.5 px-2 mx-2">Movie</div>
				<div className="border rounded-sm border-white pt-0.5 px-2 mx-2">HD</div>
				<div className="pt-0.5 px-2">All Genre</div>
			</div>
			<button className="flex mt-6 pl-2 pr-4 py-2 border-2 border-highlight rounded-full font-bold items-center hover:bg-soft-gray hover:text-highlight transition-all">
				<svg width="24" height="24">
					<image href={playIcon} />
				</svg>
				PLAY NOW
			</button>
		</>
	);
};

export default HeroFooter;
