import { navLinks } from "../../constants";

const NavbarList = () => {
	return (
		<ul className="list-none hidden lg:flex justify-center items-center flex-1">
			<li>
				{navLinks.map((nav) => (
					<a
						key={nav.id}
						className={`text-white hover:font-bold  text-sm hover:text-base transition-all hover:bg-highlight hover:text-soft-gray rounded-full border-r-highlight px-5 py-2`}
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
