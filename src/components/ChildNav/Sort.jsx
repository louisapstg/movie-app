import { useCallback } from "react";
import { sorting } from "../../constants";

/* eslint-disable react/prop-types */
const Sort = ({ handleModal, modal, setSortBy }) => {
	const handleSort = useCallback(() => {}, []);

	return (
		<div className="self-center relative">
			<button
				id="dropdownRadioBgHoverButton"
				data-dropdown-toggle="dropdownRadioBgHover"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-transparent dark:hover:bg-slate-500 dark:focus:ring-blue-800"
				type="button"
				onClick={handleModal}
			>
				Sort by
				<svg
					className="w-2.5 h-2.5 ms-3"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 10 6"
				>
					<path
						stroke="currentColor"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="m1 1 4 4 4-4"
					/>
				</svg>
			</button>
			<div
				id="dropdownRadioBgHover"
				className={`z-10 ${
					modal ? "absolute" : "hidden"
				}  w-40 -top-10 left-28 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}
			>
				<ul
					className="p-2 space-y-1 text-sm text-gray-700 dark:text-gray-200"
					aria-labelledby="dropdownRadioBgHoverButton"
				>
					<li>
						<button
							className="w-full items-center p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600"
							// onClick={handleClearFilter}
						>
							Clear Filter
						</button>
					</li>
					{sorting.map((sort) => {
						return (
							<li key={sort.id} onClick={() => handleSort(sort.id)}>
								<div className="flex items-center p-1.5 rounded hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer">
									<input
										id={sort.id}
										type="radio"
										name="default-radio"
										// checked={selectedGenre === sort.id}
										className="w-2 h-2 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500 cursor-pointer"
									/>
									<label
										htmlFor={sort.id}
										className="w-full ms-2 text-xs font-medium text-gray-900 rounded dark:text-gray-300 cursor-pointer"
									>
										{sort.label}
									</label>
								</div>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Sort;
