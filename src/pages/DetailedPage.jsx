import { useParams } from "react-router-dom";
import { Navbar, Footer, Detail } from "../components";
const DetailedPage = () => {
	const { id, url } = useParams();
	return (
		<>
			<Navbar />
			<Detail id={id} url={url} />
			<Footer />
		</>
	);
};

export default DetailedPage;
