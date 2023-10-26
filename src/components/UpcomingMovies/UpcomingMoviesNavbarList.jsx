import { upcomingMoviesLinks } from "../../constants";

const UpcomingMoviesNavbarList = () => {
	return (
		<ul className="list-none flex flex-row justify-center items-center flex-1">
			<li>
				{upcomingMoviesLinks.map((nav) => (
					<a
						key={nav.id}
						className="bg-soft-gray border border-highlight rounded-full px-2 py-1 mx-1 lg:px-8 lg:py-3 lg:mx-3 hover:text-highlight hover:font-bold hover:text-lg transition-all"
						href="#"
					>
						{nav.title}
					</a>
				))}
			</li>
		</ul>
	);
};

export default UpcomingMoviesNavbarList;
