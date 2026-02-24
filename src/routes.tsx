import { BrowserRouter, Routes, Route } from 'react-router-dom'
import IndexPage from './views/IndexPage'
import MultiArrTraversal01 from './views/MutidimensionalArrays&TheirTraversal/Unit-1/MultiArrTraversal01'

function routes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<IndexPage />} />
				<Route path="/multidimensional-arrays-and-their-traversal-in-javascript" element={<MultiArrTraversal01 />} />
			</Routes>
		</BrowserRouter>
	)
}

export default routes