import { Link } from "react-router-dom";
import { navLinks } from "../../constants";

const NavbarList = () => {
	const toTop = () => {
		window.scrollTo({ top: 0, behavior: "smooth" });
	};
	return (
		<ul className="list-none flex justify-center items-center flex-1">
			<li>
				{navLinks.map((nav) => (
					<Link
						to={nav.link}
						key={nav.id}
						onClick={toTop}
						className={`text-white hover:font-bold  text-sm hover:text-base transition-all hover:bg-highlight hover:text-soft-gray rounded-full border-r-highlight px-1 md:px-5 py-2`}
					>
						{nav.title}
					</Link>
				))}
			</li>
		</ul>
	);
};

export default NavbarList;
