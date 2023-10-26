import HeroTitle from "./HeroTitle";
import HeroFooter from "./HeroFooter";

const Hero = () => {
	return (
		<section className="flex flex-col md:flex-row mx-auto p-6 md:p-16 bg-gradient-to-b from-black to-soft-gray">
			<div className="flex flex-1 flex-col text-center lg:text-left px-6 md:px-16 xl:px-0 justify-center items-center lg:items-start text-white mt-40">
				<HeroTitle />
				<HeroFooter />
			</div>
		</section>
	);
};

export default Hero;
