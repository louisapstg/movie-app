import Search from "./Search";

/* eslint-disable react/prop-types */
const ChildNav = ({ children, keyword, setKeyword }) => {
	return (
		<div className="flex my-10 justify-between text-white">
			<div className="self-center mr-4 text-xl md:text-2xl lg:text-4xl">{children}</div>
			<Search keyword={keyword} setKeyword={setKeyword} />
		</div>
	);
};

export default ChildNav;
