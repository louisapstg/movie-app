import searchIcon from "../../assets/search-symbol.svg";

const NavbarSearch = () => {
	return (
		<div className="hidden md:inline relative">
			<input
				type="text"
				className="block w-full border border-highlight bg-black rounded-full h-9 p-4 text-slate-200"
				placeholder="Search..."
			/>
			<svg className="absolute top-1.5 left-32">
				<image href={searchIcon} />
			</svg>
		</div>
	);
};

export default NavbarSearch;
