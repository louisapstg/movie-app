import { Link } from "react-router-dom";
import AppLogo from "../../assets/svg/Logo.svg";

const Logo = () => {
	return (
		<Link to="/" className="flex items-center">
			<svg width="24" height="24">
				<image href={AppLogo} />
			</svg>
			<span className="pl-2 selft-center text-white font-semibold whitespace-normal text-base md:text-lg lg:text-2xl">
				Filmagnet
			</span>
		</Link>
	);
};

export default Logo;
