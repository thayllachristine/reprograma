// Escreva a expressão em javascript que atribui o valor `1` a `x`, se `x` for maior do que `y`.
if (x > y) {
    x = 1
}


// Escreva a expressão em Javascript que aumenta o valor da variável `score` em 5 unidades, caso o valor inicial de `score` esteja entre 80 e 90.
if (score >= 80 && score <= 90) {
    score += 5 //score = score + 5
}


// Reescreva a seguinte condicional sem usar o operador `!`: item = ! (i < 10 || v >= 50)
(i >= 10 && v < 50)
    (i < 10 || v >= 50) === false


// Escreva a expressão em Javascript que retorna `true`, se um número é par e `false` se um número é impar.
if (num % 2 === 0) {
    true
} else {
    false
}


// Escreva a expressão em Javascript que retorna `true`, se dois números forem positivos e `false` se dois números forem negativos.
if (a > 0 && b > 0) {
    true
} else if (a < 0 && b < 0) {
    false
} else {
    "Oops! Algo de errado não está certo"
}


// Escreva a expressão em Javascript que retorna `true`, se dois números tiverem os mesmos sinais (+ / -) e `false`se dois números tiverem sinais diferentes.
if (a >= 0 && b >= 0) {
    true
} else if (a < 0 && b < 0) {
    true
} else {
    false
}

if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
    true
} else {
    false
}

if (Math.sign(a) === Math.sign(b)) {
    true
} else {
    false
}