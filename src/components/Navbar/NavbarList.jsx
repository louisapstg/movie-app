import { navLinks } from "../../constants";

const NavbarList = () => {
	return (
		<ul className="list-none hidden lg:flex justify-center items-center flex-1">
			<li>
				{navLinks.map((nav) => (
					<a
						key={nav.id}
						className={`text-white hover:font-bold  text-sm hover:text-base transition-all border-r-2 border-r-highlight px-5 ${
							nav.id === navLinks.length ? "border-r-0" : ""
						}`}
						href="#"
					>
						{nav.title}
					</a>
				))}
			</li>
		</ul>
	);
};

export default NavbarList;
