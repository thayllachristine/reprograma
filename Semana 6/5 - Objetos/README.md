# Objetos

Um objeto é uma coleção de dados e/ou funcionalidades relacionadas (que geralmente consistem em diversas variáveis e funções — que são chamadas de propriedades e métodos quando estão dentro de objetos).

```js
tipo-variavel nome-objeto = {
    "nome-propriedade-1": "valor-propriedade-1",
    ...
    "nome-propriedade-n": "valor-propriedade-n"
}
```

Para que acessar as informações contidas em seu objeto, basta inserir no console:
```js
nome-objeto.nome-propriedade 
nome-objeto.`valor-propriedade`
nome-objeto[key*]
```

**Observação*: `key` é uma variável qualquer, que é definida num loop, exemplo:
```js
for (const ket in nasa) {
    console.log(key, nasa[key])
}
```

-----

## `this`

A palavra-chave `this` se refere ao objeto atual em que o código está sendo escrito, já que sempre assegura que os valores corretos estão sendo usados quando o contexto de um membro muda.

-----

#### Exemplos de objetos:

```js
const retangulo = {
    lados: 4,
    base: 100,
    altura: 50,
    area: function() {
        return this.base * this.altura
    }
}
```

```js
const tweet = {
    imagem = "url"
    username: `username`
    texto: "Lorem ipsum dolor sit..."
    like: function() {}
    retweet: function() {}
}
```

-----

#### Observação:
- Quando uma propriedade tem como valor uma função, ela é chamada de método.

-----

(**+**) Para saber mais:
- [MDN : O básico sobre objetos JavaScript](https://developer.mozilla.org/pt-BR/docs/Aprender/JavaScript/Objetos/B%C3%A1sico);
- [MDN : GitHub - Learning Area](https://github.com/mdn/learning-area/tree/master/javascript/oojs).