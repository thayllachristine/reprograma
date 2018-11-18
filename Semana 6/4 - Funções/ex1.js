// hello("what") -> "Hello, world!"
// hello() -> "Hello, world!"
function hello() {
	return "Hello, world!"
}



// show(4) -> 4 16
// show(-4) -> -4 -16
function show(x) {
	console.log(`${x} ${x * x}`)
	return x * x
	console.log(`${x} ${x * x * x}`)
	return x * x * x //-> não retorna
}



// eq3() -> 1
// eq3(1, 2, 3) -> 0
// eq3("1", 1, 3) -> 0 
// eq3("!", "a", "b") -> 0 
// eq3("!", "!", !) ->  0
function eq3(a, b, c) {
	if (a === b && a === c) {
		return 1
	} else {
		return 0
	}
}



/* Resultado: 
return : 7 
console.log(9, 11) */
function sum(x) {
	return x + 2
}
const x = 5
console.log(`${sum(x + 2)}, ${sum(sum(x + 2))}`)
//              9                     11



// Resultado: 
function confusion(x, y) {
	x = 2 * x + y
	return x
}
let x = 2
let y = 5
y = confusion(y, x)
x = confusion(y, x)
console.log(`${x}, ${y}`)

/* Resolução
x = 2
y = 5

y = confusion(y,x) > confusion(5,2) > 
x = 2 * x + y
x = 2 * 5 + 2 = 10 + 2 = 12 > x = 12


x = confusion(y, x) > confusion(12, 2) > 
x = 2 * x + y 
x = 2 * 12 + 2 > 24 + 2 = 26 > x = 26 > x

y = 12
x = 26 */