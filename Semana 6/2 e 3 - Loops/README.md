# Variáveis + Loops + Statements

## Variavéis 
- **Global**: é possível acessá-la em qualquer lugar do seu código.
- **Local**: só será utilizada dentro do escopo que for criada.

-----

### Declaração de variáveis
- **`var`**: declara uma variável, opcionalmente é possível atribuir à ela um valor em sua inicialização; seu *escopo é global*.
- **`let`**: permite que você declare variáveis limitando seu *escopo no bloco*, instrução ou em uma expressão na qual ela é usada.
- **`const`**: cria uma variável cujo o valor é fixo, ou seja, uma constante somente leitura; isso não significa que o valor é imutável, apenas que a variável constante não pode ser alterada ou retribuída.

-----

## `for`
Cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.

```js
for ([inicialização]; [condição]; [expressão final]) {
    declaração/statement
}
```

- **`[inicialização]`**: uma expressão ou declaração de variáveis.
- **`[condição]`**: para ser avaliada antes de cada iteração do loop.
- **`[expressão final]`**: será avaliada no final de cada iteração do loop, geralmente é usado para atualizar ou incrementar a variável do contador.
- **`declaração/statement`**: é executada enquanto a condição do loop for true.

```js
for (let i = 0; i < 9; i++) {
   console.log(i);
   // more statements
}
```

-----

## `for...in`
Iterage sobre propriedades enumeradas de um objeto na ordem original de inserção. O laço pode ser executado para cada propriedade distinta.

```js
for (variavel in objeto) {
    ...
}
```

- **`variavel`**: uma propriedade diferente do objeto é atribuida a cada iteração.
- **`objeto`**: objeto com propriedades enumeradas.

```js
//Declaração do objeto
const obj = {a: 1, b: 2, c: 3}

//Para cada prop(propriedade) in obj(objeto) faça:
for (const prop in obj) {
    console.log(`obj.${prop} = obj[prop]`)
}

//No output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
```

-----

## `for...of`
Percorre objetos iterativos (ex: arrays), chamando uma função personalizada com instruções a serem executadas para o valor de cada objeto distinto.

```js
for (variavel of iteravel) {
  declaração
}
```

- **`variavel`**: a cada iteração, um valor de uma propriedade diferente é atribuido à variável.
- **`iteravel`**: objeto cujos atributos serão iterados.

```js
const iterable = [10, 20, 30];

for (const value of iterable) {
  console.log(value);
}
// 10
// 20
// 30
```

-----

## `while`
Cria um laço que executa uma rotina específica enquanto a condição de teste for avaliada como true. A condição é avaliada antes da rotina.

```js
while (condição) {
  rotina
}
```

- **`condição`**: é uma expressão avaliada antes de cada passagem através do laço. Se essa condição for avaliada como true, a rotina é executada.
- **`rotina`**: executada enquanto a condição é avaliada como true.

```js
let n, x = 0
while (n < 3) {
  n++;
  x += n;
}
```

---- 

## `do...while`
Cria um laço que executa uma declaração até que o teste da condição for false. A condição é avalida depois que o bloco de código é executado, resultando que uma declaração seja executada pelo menos uma vez.

```js
do 
    declaração/statement
while (condição)
```

- **`declaração/statement`**: é executada pelo menos uma vez e re-executada cada vez que a condição for avaliada como true.
- **`condição`**: é a validade depois de cada passagem pelo laço. Se a condição for true, o bloco de código é executado novamente; caso false, o controle para.

```js
let i = 0
do {
   i += 1
   console.log(i)
} while (i < 5)
```

-----

#### Observações:
- **Qual loop usar em meu código?** Depende do contexto.
- O `for` é diferente do `while`; pois no `for` você sabe a quantidade de condições que serão executadas, já no `while` as confições serão verificadas enquando forem verdadeiras.
- As variáveis são declaradas fora do loop quando ainda serão utilizadas em algum outro momento no código para realizar mais instruções. Caso declaradas dentro, farão apenas parte do bloco.

-----
(**+**) Para saber mais:
- [`var`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/var);
- [`let`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/let);
- [`const`](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/const);
- [MDN: for](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for);
- [MDN: for...in](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...in);
- [MDN: for...of](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for...of);
- [MDN: while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while);
- [MDN: do...while](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/do...while);