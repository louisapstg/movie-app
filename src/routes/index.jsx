import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DetailedMovie, MoviesPage, TVPage, NotFound } from "../pages";
const Router = () => {
	return (
		<div className="w-full overflow-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="movie/:id" element={<DetailedMovie />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/tv-show" element={<TVPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
