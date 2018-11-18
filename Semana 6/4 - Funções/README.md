# Funções

São blocos de construção fundamentais; é um conjunto de instruções que executa uma tarefa ou calcula um valor. Para usar uma função, você deve defini-la em algum lugar no escopo do qual você quiser chamá-la.

```js
function nomeFuncao() {
	... instruções
    return
}

nomeFuncao() //para chamar a função
```

-----

## Para que usar uma função? 
Para "poupar" linhas de códigos que serão utilizadas diversas vezes; define um código genérico, que funcionará para diferentes argumentos e sempre retornará o mesmo valor.

-----

## Argumentos 
São valores definidos e passados para uma função entre parênteses e separados por vírgulas. Em via dos casos, são considerados arrays, pois cada valor inserido é o index de um vetor.  

-----

## return
A declaração `return` finaliza a execução de uma função e especifica os valores que devem ser retonados para onde a função foi chamada.
Por padrão, uma função que não tem o `return` é `undefined`.

----

### Side Effect
Recebe um argumento e o mesmo é alterado, pois não tem retorno. Ele é modificado.

-----


### Spread Operator
Permite que uma expressão ser expandida em locais onde múltiplos argumentos (por chamadas de função) ou múltiplos elementos (por array literais) são esperados.
- Para funções: `(...func)`
- Para arrays: `[...arr ]`

-----

#### Exemplos de funções:
```js
const x = []
function push10 (arr) {
    arr.push(10)
}

push10(x)
```

```js
function soma () {
    let result = 0 
    
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i]
    }

    return result
}
```
-----

#### Observações: 
- O nome da função não pode conter hífens, acentos, espaços e caracteres especiais.

-----

(**+**) Para mais informações:
- [MDN: Funções](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Fun%C3%A7%C3%B5es);
- [Side Effect in JavaScript](https://davidwalsh.name/preventing-sideeffects-javascript);
- [Spread Operator](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Spread_operator);