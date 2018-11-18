/* Escreva um loop em Javascript que gera uma matriz de zeros 5x5.
    [ [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0] ] */

let matriz = []
for (let y = 0; y < 5; y++) {
    let linha = []

    for (let x = 0; x < 5; x++) {
        linha.push(0) 
    }
    matriz.push(linha)
}

console.log(matriz)



/* Escreva um loop em Javascript que gera uma matriz no seguinte formato:
[ [0, 1, 2, 3, 4],
  [1, 0, 1, 2, 3],
  [2, 1, 0, 1, 2],
  [3, 2, 1, 0, 1],
  [4, 3, 2, 1, 0] ] */
let matriz = []
for (let y = 0; y < 5; y++){ 
    let linha = []

    for (let x = 0; x < 5; x++) {
        linha.push(Math.abs(i - j))
    }
    matriz.push(linha)
}



/*Escreva um loop em Javascript que printa o seguinte padrão no console:
  *******
  ******
  *****
  ****
  ***
  **
  * */
let estrelasAll = []

for (let qtd = 7; qtd > 1; qtd-- ) {

    let estrelas = [`*`]

    for (let estreLinha = 7; estreLinha >= 0; estreLinha--) {

        estrelas[estreLinha]      
        
        console.log(estrelas)
    }

 

}

// 7
// 6
// 5
// 4
// 3
// 2
// 1


// Escreva um loop em Javascript
// que printa o seguinte padrão
// no console:
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567 