import { useState } from "react";
import { Link } from "react-router-dom";

// -- Here declare topics index
function IndexPage() {
    const courses = [
        {
            name: "Multidimensional Arrays and Their Traversal in JavaScript",
            units: [
                {
                    name: "Unit 1",
                    topics: [
                        {
                            name: "Multidimensional Arrays and Their Traversal in JavaScript",
                            link: "/multidimensional-arrays-and-their-traversal-in-javascript",
                        },
                        {
                            name: "Updating a Specific Element in a 2D Array",
                            link: "/updating-a-specific-element-in-a-2d-array",
                        },
                        {
                            name: "Listing Unoccupied Apartments in a 2D Array",
                            link: "/listing-unoccupied-apartments-in-a-2d-array",
                        },
                        {
                            name: "Print Apartment Codes of Ground Floor",
                            link: "/print-apartment-codes-of-ground-floor",
                        },
                        {
                            name: "Adding a New Floor to the Apartment Building Directory",
                            link: "/adding-a-new-floor-to-the-apartment-building-directory",
                        },
                        {
                            name: "Managing a 3-Story Building With 2D Arrays in JavaScript",
                            link: "/managing-a-3-story-building-with-2d-arrays-in-javascript",
                        },
                    ]
                },
                {
                    name: "Unit 2",
                    topics: [
                        {
                            name: "More Ways to Traverse Multidimensional Arrays in JavaScript",
                            link: "/more-ways-to-traverse-multidimensional-arrays-in-javascript",
                        },
                        {
                            name: "Reverse Matrix Column Traversal Pattern",
                            link: "/reverse-matrix-column-traversal-pattern",
                        },
                        {
                            name: "Zigzag Bookshelf Traversal Fix",
                            link: "/zigzag-bookshelf-traversal-fix",
                        },
                        {
                            name: "Traversing and Switching Directions in a 2D Matrix",
                            link: "/traversing-and-switching-directions-in-a-2d-matrix",
                        },
                        {
                            name: "Vertical Traverse of a 2D Matrix",
                            link: "/vertical-traverse-of-a-2d-matrix",
                        },
                        {
                            name: "Zigzag Traversal of a 2D Grid in JavaScript",
                            link: "/zigzag-traversal-of-a-2d-grid-in-javascript",
                        },
                    ],
                },
                {
                    name: "Unit 3",
                    topics: [
                        {
                            name: "Transposing a Matrix in JavaScript",
                            link: "/transposing-a-matrix-in-javascript",
                        },
                        {
                            name: "Solving the Problem with Transposing a 2D Array",
                            link: "/solving-the-problem-with-transposing-a-2d-array",
                        },
                        {
                            name: "Transposing a Matrix in JavaScript",
                            link: "/transposing-a-matrix-in-javascript",
                        },
                        {
                            name: "Reverse Order Matrix Transposition",
                            link: "/reverse-order-matrix-transposition",
                        },
                        {
                            name: "Reflect Matrix Over Secondary Diagonal in JavaScript",
                            link: "/reflect-matrix-over-secondary-diagonal-in-javascript",
                        },
                        {
                            name: "Transposing Seating Arrangements in JavaScript",
                            link: "/transposing-seating-arrangements-in-javascript",
                        },
                    ],
                },
                {
                    name: "Unit 4",
                    topics: [
                        {
                            name: "Multidimensional Arrays: Finding Ideal Positions in JavaScript",
                            link: "/multidimensional-arrays-finding-ideal-positions-in-javascript",
                        },
                        {
                            name: "Identify Horizontal Move Positions in 2D Array",
                            link: "/identify-horizontal-move-positions-in-2d-array",
                        },
                        {
                            name: "Fixing the Positions for Chess Piece Placement",
                            link: "/fixing-the-positions-for-chess-piece-placement",
                        },
                        {
                            name: "Position Adjacency Check in a 2D Game Board",
                            link: "/position-adjacency-check-in-a-2d-game-board",
                        },
                        {
                            name: "Analyzing Chessboard for Valid Piece Placement",
                            link: "/analyzing-chessboard-for-valid-piece-placement",
                        },
                        {
                            name: "Counting Submatrices with E's at Four Corners",
                            link: "/counting-submatrices-with-es-at-four-corners",
                        },
                    ],
                },
                {
                    name: "Unit 5",
                    topics: [
                        {
                            name: "Traversing 2D Grids with Conditional Moves in JavaScript",
                            link: "/traversing-2d-grids-with-conditional-moves-in-javascript",
                        },
                        {
                            name: "Enhance Path-Finding with Diagonal Moves",
                            link: "/enhance-path-finding-with-diagonal-moves",
                        },
                        {
                            name: "Fix the Highest Peak Altitude Finder in JavaScript",
                            link: "/fix-the-highest-peak-altitude-finder-in-javascript",
                        },
                        {
                            name: "Finding the Next Higher Peak in a 2D Array",
                            link: "/finding-the-next-higher-peak-in-a-2d-array",
                        },
                        {
                            name: "Trek Path through a 2D Elevation Map in JavaScript",
                            link: "/trek-path-through-a-2d-elevation-map-in-javascript",
                        },
                        {
                            name: "Mountain Trail Path Traversal in JavaScript",
                            link: "/mountain-trail-path-traversal-in-javascript",
                        },
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

                                                <div className={`${unitOpen ? "flex flex-col gap-2" : "hidden"} px-3 pb-3`}>
                                                        {unit.topics.map((topic, ti) => (
                                                            <Link
                                                                to={topic.link}
                                                                key={ti}
                                                                className="text-sm text-slate-700 bg-white px-2 py-1 rounded-md border border-gray-100 hover:bg-sky-50 transition-colors"
                                                            >{topic.name}</Link>
                                                        ))}
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

export default IndexPage;
