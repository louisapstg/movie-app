import { useState } from "react";
import Search from "./Search";
import Filter from "./Filter";

/* eslint-disable react/prop-types */
const ChildNav = ({ children, genres, keyword, setKeyword }) => {
	const [modal, setModal] = useState(false);

	const handleModal = (e) => {
		e.preventDefault();
		setModal(!modal);
	};

	return (
		<div className="flex-row md:flex my-14 justify-between text-white">
			<div className="self-center mr-4 text-xl md:text-2xl lg:text-4xl">{children}</div>
			<Filter genres={genres} modal={modal} handleModal={handleModal} />
			<div className="self-center">
				<Search keyword={keyword} setKeyword={setKeyword} />
			</div>
		</div>
	);
};

export default ChildNav;
