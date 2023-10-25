import AppLogo from "../../assets/Logo.svg";

const Logo = () => {
	return (
		<a href="#" className="flex items-center">
			<svg width="39" height="39">
				<image href={AppLogo} />
			</svg>
			<span className="pl-2 selft-center text-white font-semibold whitespace-normal text-xl md:text-[29px]">
				Filmagnet
			</span>
		</a>
	);
};

export default Logo;
