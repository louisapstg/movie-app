import { Navbar, Footer } from "../../components";
import { useContext } from "react";
import DataContext from "../../utils/DataContext";

const DetailedMovie = () => {
	const data = useContext(DataContext);
	console.log(data);
	return (
		<>
			<Navbar />
			<Footer />
		</>
	);
};

export default DetailedMovie;
