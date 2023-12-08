/* eslint-disable react/prop-types */
import useHook from "../hooks/useHook";

const Pagination = ({ total_pages }) => {
	const { page, setPage } = useHook();
	const plusPage = (e) => {
		e.preventDefault();
		if (page === total_pages) return;
		setPage(page + 1);
		window.scrollTo({ top: window.scrollY - 60, behavior: "smooth" });
	};

	const minPage = (e) => {
		e.preventDefault();
		if (page === 1) return;
		setPage(page - 1);
		window.scrollTo({ top: window.scrollY - 60, behavior: "smooth" });
	};
	return (
		<nav aria-label="Page navigation example">
			<ul className="flex items-center justify-center -space-x-px h-10 text-base mt-6">
				{page <= 1 ? (
					<li>
						<button className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed">
							<div className="w-3 h-3"></div>
						</button>
					</li>
				) : (
					<li>
						<button
							className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							onClick={minPage}
						>
							<span className="sr-only">Previous</span>
							<svg
								className="w-3 h-3 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M5 1 1 5l4 4"
								/>
							</svg>
						</button>
					</li>
				)}

				<li>
					<div
						href="#"
						className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
					>
						{page} of {total_pages}
					</div>
				</li>
				{page >= total_pages ? (
					<li>
						<button className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 cursor-not-allowed">
							<div className="w-3 h-3"></div>
						</button>
					</li>
				) : (
					<li>
						<button
							className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
							onClick={plusPage}
						>
							<span className="sr-only">Next</span>
							<svg
								className="w-3 h-3 rtl:rotate-180"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 6 10"
							>
								<path
									stroke="currentColor"
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="m1 9 4-4-4-4"
								/>
							</svg>
						</button>
					</li>
				)}
			</ul>
		</nav>
	);
};

export default Pagination;
