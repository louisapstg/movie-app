import { Link } from "react-router-dom";
import accountSVG from "../../assets/svg/account.svg";

const User = () => {
	return (
		<div className="hidden md:inline relative">
			<Link to="/login">
				<svg width={36} height={36}>
					<image href={accountSVG} />
				</svg>
			</Link>
		</div>
	);
};

export default User;
