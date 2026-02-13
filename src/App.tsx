import { useState } from "react";

// -- Here declare topics index
function App() {
	const courses = [
		{
			name: "Multidimensional Arrays and Their Traversal in JavaScript",
			units: [
				{
					name: "Unit 1",
					topics: [
						"Multidimensional Arrays and Their Traversal in JavaScript",
						"Updating a Specific Element in a 2D Array",
						"Listing Unoccupied Apartments in a 2D Array",
						"Print Apartment Codes of Ground Floor",
						"Adding a New Floor to the Apartment Building Directory",
						"Managing a 3-Story Building With 2D Arrays in JavaScript",
					],
				},
				{
					name: "Unit 2",
					topics: [
						"More Ways to Traverse Multidimensional Arrays in JavaScript",
						"Reverse Matrix Column Traversal Pattern",
						"Zigzag Bookshelf Traversal Fix",
						"Traversing and Switching Directions in a 2D Matrix",
						"Vertical Traverse of a 2D Matrix",
						"Zigzag Traversal of a 2D Grid in JavaScript",
					],
				},
				{
					name: "Unit 3",
					topics: [
						"Transposing a Matrix in JavaScript",
						"Solving the Problem with Transposing a 2D Array",
						"Transposing a Matrix in JavaScript",
						"Reverse Order Matrix Transposition",
						"Reflect Matrix Over Secondary Diagonal in JavaScript",
						"Transposing Seating Arrangements in JavaScript",
					],
				},
				{
					name: "Unit 4",
					topics: [
						"Multidimensional Arrays: Finding Ideal Positions in JavaScript",
						"Identify Horizontal Move Positions in 2D Array",
						"Fixing the Positions for Chess Piece Placement",
						"Position Adjacency Check in a 2D Game Board",
						"Analyzing Chessboard for Valid Piece Placement",
						"Counting Submatrices with E's at Four Corners",
					],
				},
				{
					name: "Unit 5",
					topics: [
						"Traversing 2D Grids with Conditional Moves in JavaScript",
						"Enhance Path-Finding with Diagonal Moves",
						"Fix the Highest Peak Altitude Finder in JavaScript",
						"Finding the Next Higher Peak in a 2D Array",
						"Trek Path through a 2D Elevation Map in JavaScript",
						"Mountain Trail Path Traversal in JavaScript",
					],
				},
			],
		},
	];

	const [openCourses, setOpenCourses] = useState<number[]>([]);
	const [openUnits, setOpenUnits] = useState<Record<number, number[]>>({});

	const toggleCourse = (ci: number) => {
		setOpenCourses((prev) =>
			prev.includes(ci) ? prev.filter((x) => x !== ci) : [...prev, ci]
		);
	};

	const toggleUnit = (ci: number, ui: number) => {
		setOpenUnits((prev) => {
			const arr = prev[ci] ?? [];
			const next = arr.includes(ui) ? arr.filter((x) => x !== ui) : [...arr, ui];
			return { ...prev, [ci]: next };
		});
	};

	return (
		<div className="p-4">
			<h1 className="text-2xl text-center text-gray-900 font-medium">
				Advanced Code Interview Preparation JavaScript
			</h1>

			<div className="mt-6 max-w-5xl mx-auto">
				{courses.map((course, ci) => {
					const courseOpen = openCourses.includes(ci);
					return (
						<div
							key={ci}
							className="mb-4 bg-linear-to-r from-slate-800 to-sky-700 rounded-lg shadow-lg overflow-hidden"
						>
							<button
								onClick={() => toggleCourse(ci)}
								className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 focus:outline-none"
							>
								<div>
									<div className="text-white font-semibold text-lg">
										{course.name}
									</div>
									<div className="text-sky-200 text-sm mt-0.5">
										{course.units.length} units — click to expand
									</div>
								</div>
								<svg
									className={`w-6 h-6 text-white transform transition-transform duration-200 ${courseOpen ? "rotate-180" : "rotate-0"
										}`}
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</button>

							<div
								className={`bg-white/90 transition-max-h duration-300 overflow-hidden ${courseOpen ? "max-h-500" : "max-h-0"
									}`}
							>
								<div className="p-4 grid grid-cols-1 gap-4">
									{course.units.map((unit, ui) => {
										const unitOpen = (openUnits[ci] ?? []).includes(ui);
										return (
											<div key={ui} className="rounded-md bg-gray-50 border border-gray-100">
												<button
													onClick={() => toggleUnit(ci, ui)}
													className="w-full px-3 py-2 flex items-center justify-between"
												>
													<div>
														<div className="text-slate-900 font-medium">{unit.name}</div>
														<div className="text-xs text-slate-500">{unit.topics.length} topics</div>
													</div>
													<svg
														className={`w-5 h-5 text-slate-600 transform transition-transform duration-200 ${unitOpen ? "rotate-180" : "rotate-0"
															}`}
														viewBox="0 0 20 20"
														fill="none"
														xmlns="http://www.w3.org/2000/svg"
													>
														<path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
													</svg>
												</button>

												<div className={`${unitOpen ? "block" : "hidden"} px-3 pb-3`}>
													<ul className="mt-2 space-y-2">
														{unit.topics.map((topic, ti) => (
															<li
																key={ti}
																className="text-sm text-slate-700 bg-white px-2 py-1 rounded-md border border-gray-100 hover:bg-sky-50 transition-colors"
															>
																{topic}
															</li>
														))}
													</ul>
												</div>
											</div>
										);
									})}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default App;
