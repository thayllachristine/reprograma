const table = document.querySelector("table")
const size = 40
let matrix = []

for (let i = 0; i < size; i++) {
	const row = document.createElement("tr")
	let cell_list = []

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

			let r = Math.floor(Math.random() * 256)
			let g = Math.floor(Math.random() * 256)
			let b = Math.floor(Math.random() * 256)

			const color = `rgba(${r}, ${g}, ${b}, 1)`
			cell.style.backgroundColor = color

			console.log('r : ', r)
			console.log('g : ', g)
			console.log('b : ', b)
		}
		)
	}
}

for (const painted_cell of document.querySelectorAll("td")) {
	painted_cell.style.backgroundColor = ""
}

// definir um vetor com algumas cores e colocá-lo numa const
			// cell.classList.add("painted")
			// event.target.classList.add("painted")