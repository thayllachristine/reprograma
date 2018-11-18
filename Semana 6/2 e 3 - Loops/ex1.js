// Escreva um loop um Javascript que vai calcular a soma de todos os números entre 0 e 300.
let soma = 0
for (let num = 0; num <= 300; num++) {
    soma = soma + num;   
}



/* Escreva um loop em Javascript que vai calcular a seguinte soma:
    1 * 1 + 2 * 2 + 3 * 2 + ... + 400 * 400*/
let mult, adc, soma = 0
for (let num = 1; num <= 400; num++) {
    console.log(num)

    //Multiplica o valor inicial : num * num
    mult = num * num
    console.log(mult)

    //Adição do valor multiplicado : mult + mult
    adc = mult + mult
    console.log(adc)

    //Soma de tudo o que foi adicionado
    soma = adc 
    console.log(soma)  
}



/* Escreva um loop em Javascript que vai calcular a seguinte soma:
    1 * 2 + 2 * 3 + 3 * 4 + ... + 249 * 250 */
let mult, adc, soma = 0
for (let num = 1; num <= 250; num++) {
    console.log(num)

    //Multiplicação
    mult = num * (num - 1)
    console.log(mult)
    
    //Adição do que foi multiplicado
	adc =+ mult
    console.log(adc)
    
    //Somatório
    soma = adc
    console.log(soma)
}



// Escreva um loop em Javascript que vai calcular 10! (10 fatorial), o que significa 10 * 9 * 8 * 7 ... * 1.
let fatorial = 10
for (let num = 9; num >= 1; num--) {
    fatorial = fatorial * num
    console.log(fatorial)
}



// Escreva um loop em Javascript que calcula quantos termos a soma 1 + 2 + 3 + ... precisa para que o resultado dela exceda um milhão.
let termos = 0
let soma = 0
let resultado = 1000000

while (soma < resultado) {
    termos = termos + 1
    soma = soma + termos 

    //soma = soma + termos; termos = termos + 1    
}

`- Quantidade de termos: ${termos}
 - Valor da Soma: ${soma}`



/* Escreva um loop em Javascript que simule o problema 3x + 1.
    "Esta conjectura aplica-se a qualquer número natural não nulo, e diz-nos para, se este número for par o dividir por 2 (/2), e se for impar, para multiplicar por 3 e adicionar 1 (*3+1).
    Desta forma, por exemplo, se a sequência iniciar com o número 5 ter-se-á: 5; 16; 8; 4; 2; 1 */
let numCollatz = 5
while (numCollatz > 1) {
    if (numCollatz % 2 === 0) {
        numCollatz = numCollatz / 2
    } else {
        numCollatz = numCollatz * 3 + 1
    }
}



// Escreva um loop em Javascript que gera uma lista com 100 números randomicos.
let listNum = []
do {
    listNum.push(Math.floor(Math.random() * 100))
} 
while (listNum.length < 99) 



/* Escreva um loop em Javascript que "lance uma moeda" a cada nova iteração. 
    Considere 1 = cara, 0 = coroa. 
    Rode esse loop 1000 vezes e printe o numero de caras e o numero de coroas no console.*/
let cara, coroa = 0
for (let loop = 0; loop < 1000; loop++){
    let moeda = Math.floor(Math.random() * 2)

    if (moeda === 1) {
        cara++
    } else {
        coroa++
    }
}