import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home, DetailedPage, MoviesPage, TVPage, NotFound } from "../pages";
const Router = () => {
	return (
		<div className="w-full overflow-hidden">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/tv-show" element={<TVPage />} />
					<Route path=":url/:id" element={<DetailedPage />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default Router;
