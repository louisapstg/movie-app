import Logo from "./Logo";
import NavbarList from "./NavbarList";
import User from "./User";

const Navbar = () => {
	return (
		<nav className="w-full flex p-3 justify-between items-center bg-soft-gray fixed z-20 top-0 left-0 opacity-90">
			<Logo />
			<NavbarList />
			<User />
		</nav>
	);
};

export default Navbar;
