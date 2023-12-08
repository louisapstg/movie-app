import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";
import { sorting } from "../../constants";

/* eslint-disable react/prop-types */
const ChildNav = ({ children, genres }) => {
	const [filterModal, setFilterModal] = useState(false);
	const [sortModal, setSortModal] = useState(false);

	const handleSortModal = (e) => {
		e.preventDefault();
		setSortModal(!sortModal);
	};

	const handleGenreModal = (e) => {
		e.preventDefault();
		setFilterModal(!filterModal);
	};

	return (
		<div className="flex-row md:flex my-14 justify-between text-white">
			<div className="self-center mr-4 text-xl md:text-2xl lg:text-4xl">{children}</div>
			<Filter types={sorting} modal={sortModal} handleModal={handleSortModal}>
				Sort By
			</Filter>
			<Filter types={genres} modal={filterModal} handleModal={handleGenreModal}>
				Genres
			</Filter>
			<div className="self-center">
				<Search />
			</div>
		</div>
	);
};

export default ChildNav;
