import { Link } from "react-router-dom"

function MultiArrTraversal01() {
	/**
	 * exep. ??
	 * como expresar arrays en JS y TS
	 * existen mas de matrix bidimensionales ? ej tridimensionales o mas ?
	 * let matriz_b = [
		{},
		{},
		{}
	];	
	

	let matriz_c = [
		[],
		{},
		true,
		false
	];
	*/

	/**
	 * 2D Matriz
	 * Arrya de arrays
	 * WHAT´S HAPPEN IF I GOT A MATRIX WITH
	 * DIFFERENT ELEMENTS OF NUMBER EACH ONE ?
	*/

	/**let matriz_a = [
		[1, { name: 'David', age: 24 }, true, 2.3],
		['a', 'bcd', 'de', 'got'],
		[1, 4, 5, 2, 0, 3]
	];


	// matrix[3][unkow] what´s happen here ?
	let matrix_AB = [
		[1, 4],
		[6, 7, 8],
		[9, 0, 11]
	];


	// Multi dimensional arrays = Array of arryas
	// 2D Matrix -> data that you express in a cuadrícula (rows & columns)

	// Recorrer una matriz
	let matrix_OP = [
		[1, 2, 3],
		[4, 5, 6]
	];

	const rows_OP = matrix_OP.length;
	const cols_OP = matrix_OP[0].length;

	// recorrer con un for normal
	for (let row = 0; row < rows_OP; row++) {
		for (let col = 0; col < cols_OP; col++) {
			console.log(matrix_OP[row][col]);
		}
	}

	// usando FOR para arrays de JS
	for (const row of matrix_OP) {
		for (const col of row) {
			console.log(col);
		}
	}

	// un foEach
	matrix_OP.forEach(row => row.forEach(col => console.log(col)));

	// Recorrer solamente una fila
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];

	for (let row = 0; row < matrix.length; row++) {
		console.log("number row:", matrix[row]);
	}

	// Delete row (splice)
	matrix.splice(1,1);
	matrix.splice(0,2); // elimina las primeras dos filas

	matrix.splice(1, 0 , [3,4]); **/

	// Ejercicios típicos de entrevista
	// 1. Remove de column
	const matrix = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];

	/**
	 * 1. Find index col
	 * 	1.1 is -1 -> return natural matrix
	 * 		else return modified matrix.
	 * 	1.2 Itere remove this index founded
	*/
	// Find index col
	function findColumnIndex(matrix: number[][]) {
		for (const row of matrix) {
			// find -> Devuelve el primer elemento del array que cumple una condicion arrow function
			// finIdex -> 
			let columnIndex = row.findIndex(element => element == 5);

			// -1
			if (columnIndex != -1) return columnIndex;
		}

		return null;
	}

	function removeColumn(columnIndex: null | number, matrix: number[][]) {
		if (columnIndex == null) return matrix;

		for (const row of matrix) row.splice(columnIndex, 1);

		return matrix;
	}

	const columnIndex = findColumnIndex(matrix);
	const resultMatrix = removeColumn(columnIndex, matrix);

	// console.log("resultMatrix", resultMatrix);

	// Ejercicio dos: Recorrer filas en una matriz
	const matrix2 = [
		[1, 2, 3],
		[4, 5, 6],
		[7, 8, 9]
	];

	/**
	 * 1. Mediante un ciclo for extraigo cada row
	 * 1.1 Imprimo un console.log
	*/
	for (const row of matrix2) {
		for (const element of row) {
			// console.log("element row", element)
		}
	}


	/**
	 * ==========================================================
	 * MORE EXCERCISE MULTITRANSVERSAL ARRAYS 27 Aug 2026
	 * ==========================================================
	*/
	const matrixExOne = [
		[1, 5, 8, 9, 0],
		[0, 2, 3, 4, 6],
		[8, 9, 1, 2, 3]
	];

	// Ex. 1 - Recorre cada elemento del array (por filas)
	/**
	 for (let row = 0; row < matrixExOne.length; row++) {
		 for (let col = 0; col < matrixExOne[row].length; col++) {
			 console.log(matrixExOne[row][col]);
		 }
	 }
	 
	*/


	// Ex. 1 - Recorre cada elemento del array (por columnas)
	// ej. 1,0,8,5,2,9, ... este ejercicio es más adelante


	// Ex. 1 -  Elimina el elemento de índice 2 de la fila 2
	// Y reemplaza el elemento del índice 1 de la fila 1 por 0
	/**
	 * Debemos llegar a la siguiente matriz:
	 * [
		[1, 0, 8, 9, 0],
		[0, 2, 4, 6],
		[8, 9, 1, 2, 3]
	];

	Paso 1: Contar fila
		Si es 1
			Recorrer col
				numeras col == 1 para cambiar por cero
		Si es 2
			Recorres col
				numeras col == 2
					eliminas elemento
	*/
	matrixExOne[0].splice(1, 1, 0);
	matrixExOne[1].splice(2, 1);

	/**for (let row = 0; row < matrixExOne.length; row++) {
		if (row == 0) {
			matrixExOne[row].splice(1, 1, 0);

			continue;
		}

		if (row == 1) {
			matrixExOne[row].splice(2, 1);
			break;
		}
	} */

	console.log("MATRIX", matrixExOne);


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