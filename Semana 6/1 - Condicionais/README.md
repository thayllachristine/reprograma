# Condicionais

A condicional `if`  é uma estrutura condicional que executa a afirmação, dentro do bloco, *se* determinada condição for verdadeira. *Se* for falsa, executa as afirmações dentro de `else`.

```javascript
if (conditional) {
    //instrução
} else {
    //outra instrução
}
```

A condicional `switch` avalia uma expressão, combinando o valor da expressão para um cláusula `case`, e executa as instruções associadas ao `case`.


```js
switch (expressao) {
    case value-1:
        instrução
        break
    case value-2:
        instrução
        break
    ...
    case value-n:
        instrução
        break
    default:
        instrução
        break
}
```

-----

## Operadores

Operador | Tipo | O que é?
-----|-----|-----
`=` | Atribuição | Atribui um valor
`==` | Comparação | Compara o valor e **não** checa o tipo de variável
`===` | Comparação | Compara o valor e checa o tipo de variável
`!=`| Comparação | Diferente
`!==` | Comparação | Diferente e checa o tipo de variável
`(++)` | Aritmético | Incrementa um valor
`(--)` | Aritmético | Decrementa um valor
`&&`| Lógico | "E" lógico
`*` | Lógico | "OU" lógico
`!` |  Lógico | Negação lógica; converte o valor para verdadeiro ou falso de acordo a expressão

**Observação*: devido a linguagem Markdown, o operador "ou" lógico (`||`) não foi escrito.

-----

## Template Strings
Template strings são envolvidas por acentos graves (``) em vez de aspas simples ou duplas. Template strings podem possuir placeholders. Estes são indicados por um cifrão seguido de chaves `${expression}`.

-----

### Outras infos: 
- `typeof`: É uma função no JavaScript que verifica no console o tipo de variável.

-----

(**+**) Para saber mais: 
- [Condicional: if...else](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else);
- [Condicional: switch](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch);
- [Operadores](https://developer.mo.zilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_operators); 
- [Template Strings](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/template_strings);