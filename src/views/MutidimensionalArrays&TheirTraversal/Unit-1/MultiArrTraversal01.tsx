import { Link } from "react-router-dom"

function MultiArrTraversal01() {
	return (
		<div className="p-4">
			<div className="flex gap-4">
				<Link to="/" className="inline-flex items-center mb-4 text-sky-700 hover:underline">
					<span className="mr-2">&#8592;</span>
					Back to Home
				</Link>
				<h1 className="text-2xl font-bold mb-4">Multidimensional Arrays and Their Traversal in JavaScript</h1>
			</div>
			<p className="mb-2">
				<span className="font-bold">Multidimensional arrays are arrays of arrays</span>, allowing us to represent complex data
				structures like matrices, grids, and tables. <span className="font-bold">Traversing</span> these arrays involves iterating
				through each level of nesting to access individual elements.
			</p>
		</div>
	)
}

export default MultiArrTraversal01