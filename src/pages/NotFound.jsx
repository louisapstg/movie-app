import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="flex items-center justify-center h-screen bg-black text-white">
			<div className="text-center">
				<h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
				<p className="text-gray-600">The page you are looking for does not exist.</p>
				<Link to="/">
					<button className="mt-4">Back</button>
				</Link>
			</div>
		</div>
	);
}

export default NotFound;
