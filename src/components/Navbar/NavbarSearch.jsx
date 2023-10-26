import searchIcon from "../../assets/search-symbol.svg";

const NavbarSearch = () => {
	return (
		<div className="hidden md:inline relative">
			<input
				type="text"
				className="block w-full border border-highlight bg-black rounded-full h-9 pl-4 pr-12 py-5 text-slate-200"
				placeholder="Search..."
			/>
			<svg className="absolute top-2 left-40">
				<image href={searchIcon} />
			</svg>
		</div>
	);
};

export default NavbarSearch;
