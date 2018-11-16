    # Revisão

## HTML Semântico 
1. `<nav>`
2. `<body>`
3. `<header>`
4. `<main>`
5. `<section>`
6. `<article>`
7. `<aside>`

Observação: o `<main>` sempre fica fora do `<header>`.

-----

## Método BEM
É uma boa prática para nomeação de classes dentro do HTML.

`block__elemento_modificador `

Obs.: quando uma modificação é utilizada várias vezes, é recomendado que nomeie uma classe com a letra inicial `u-modificador`.

-----

## Navegadores 
Algumas propriedades não funcionavam em determinados navegadores e para isso, existiam prefixos para que as propriedades funcionassem.


Prefixo | Navegador
----- | -----
`-webkit-` | Chrome
`-moz-` | Mozilla Firefox
`-ms-` | Microsoft
`-o-` | Opera

-----

## Breakpoint
É quando o valor de uma resolução é alterada via `@media` query.
O `@media` sempre lê de cima para baixo, pois ele entende como hierarquia.

-----

## Qual unidade usar?
- `px`: é uma unidade absoluta;
- `rem`: não é um valor, é uma relação  fonte do navegador ou a fonte que foi inclusa no html.

Exemplo:
```
Se estiver definido 10px : 2.5rem = 25px
(multiplicando o valor pelo definido)
```

#### Observações: 
- o `font-size` padrão do html é 16px.
- `rem` sempre é utilizado em fontes.
- preferencialmente, usa-se porcentagem (`%`) em `width`.

-----

### Limite
- `max-width`: se adapta, pode receber valores absolutos.
- `max- height`
- `min-width`
- `min-height`
- `width`: nunca se adapta a nada.
- `height`

------

## `position`

Propriedade | Valores 
----- | -----
`static` | padrão 
`fixed` | de acordo com o navegador
`absolute` | herda as propriedades de uma seção que tenha uma posição diferente/determina a relação
`relative` | _o diferentão do role/aquariano_ e tem quatro novas propriedades (top, right, bottom e left)

------

## Propriedades de `background`

Propriedade | O que é?
----- | -----
`vh` | usado normalmente quando o elemento mãe tem que ser maior que seu conteúdo
`background-position: hor vert` | define a posição do background
`background-size: cover` | permite que a imagem de fundo fique do tamanho do navegador

------

(**+**) Para saber mais:
- caniuse.com
- css-tricks.com
- https://css-tricks.com/snippets/css/a-guide-to-flexbox/