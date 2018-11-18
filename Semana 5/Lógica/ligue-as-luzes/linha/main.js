const table = document.querySelector("table")
const size = 40
let matrix = []

for (let i = 0; i < size; i++) {
	const row = document.createElement("tr") //cria a lista pelo html
	let cell_list = [] // cria a lista pelo js

	for (let j = 0; j < size; j++) {
		const cell = document.createElement("td")

		row.appendChild(cell)
		cell_list.push(cell)
	}

	table.appendChild(row)
	matrix.push(cell_list)
}

for (const [row_index, row] of matrix.entries()) {
	for (const [cell_index, cell] of row.entries()) {
		cell.addEventListener("click", event => {
			for (const painted_cell of document.querySelectorAll("td.painted")) {
				painted_cell.classList.remove("painted")
			} 

			for (const cell_to_paint of matrix[row_index]) {
				cell_to_paint.classList.add("painted")
		
			}
		})
	}
}

