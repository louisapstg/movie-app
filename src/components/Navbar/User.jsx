import accountSVG from "../../assets/account.svg";

const User = () => {
	return (
		<div className="hidden md:inline relative">
			<a href="/">
				<svg width={36} height={36}>
					<image href={accountSVG} />
				</svg>
			</a>
		</div>
	);
};

export default User;