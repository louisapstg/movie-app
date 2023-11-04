import AppLogo from "../../../public/Logo.svg";

const Logo = () => {
	return (
		<a href="#" className="flex items-center">
			<svg width="24" height="24">
				<image href={AppLogo} />
			</svg>
			<span className="pl-2 selft-center text-white font-semibold whitespace-normal text-base md:text-lg lg:text-2xl">
				Filmagnet
			</span>
		</a>
	);
};

export default Logo;
