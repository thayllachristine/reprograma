/* Duas condicionais são equivalentes
quando, dado um mesmo input, devolvem
o mesmo output. Qual das próximas
condicionais são equivalentes? Por que?*/

//Um número randôminco entre -10 a 10:
const rand = Math.floor(Math.random() * 21) - 10 

// A
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
} else {
	if (rand < 0) {
		console.log(`O valor é negativo: ${rand}!`)
	} else {
		console.log(`O valor é zero!`)
	}
}

//B : Essa condição gera duas mensagens, se tiver um número positivo.
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
} else {
	console.log(`O valor é zero!`)
}

// C : 3 condições independentes
if (rand > 0) {
	console.log(`O valor é positivo: ${rand}!`)
}
if (rand < 0) {
	console.log(`O valor é negativo: ${rand}!`)
}
if (rand === 0) {
	console.log(`O valor é zero!`)
}