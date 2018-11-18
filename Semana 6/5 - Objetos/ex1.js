/*Objetos - Pokémon 
 Ref.: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon */

// 1. Defina um objeto de Javascript que descreva um dos pokemons da lista de pokemons do Wikipedia.
const pokemonzinho = {
    num_nacional: 39,
    nome: `Jigglypuff`,
    nome_japones: `Purin (プリン)`,
    img: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png`,
    evolui: `Igglybuff`
    /*sobre : `Jigglypuff, conhecido no Japão como Purin (プリン), é uma espécie de Pokémon da franquia Pokémon que pertence a Nintendo e Game Freak. Criada por Ken Sugimori, Jigglypuff fez sua primeira aparição nos jogos eletrônicos Pokémon Red e Blue e, depois, apareceu nas sequências dos jogos que se seguiram. Mais tarde, apareceu em diversas mercadorias, títulos em spin-off e adaptações impressas da franquia. Jigglypuff é dublado por Rachael Lillis em inglês e Mika Kanai em japonês. No musical live action, Pokémon Live!, Jigglypuff é interpretado por Leah Smith.
    Conhecido como um Pokémon Balão, Jigglypuff evolui de Igglybuff quando se atinge um determinado ponto de felicidade, e evolui para Wigglytuff quando exposto a uma Pedra da Lua. O seu nome é uma combinação das palavras "jiggly" e "puff". O personagem tem sido destaque em um papel recorrente na série de anime e serviu como foco para várias adaptações impressas da franquia. Desde que apareceu na série Pokémon, Jigglypuff recebeu recepção geralmente positiva. Ele foi apresentado em várias formas de mercadoria, incluindo figurinhas, brinquedos de pelúcia, e o Pokémon Trading Card Game.    
    A música cantada por Jigglypuff, foi gravada pelo cantor Morta que a incluiu em seu álbum, M-13, com o título "Jygglypuff's Song".`*/
}

pokemon.nome
pokemon.img



// 2. Printe no console a seguinte frase: "Hello, my name is < > and my name in Japanese is < >."
/*console.log(`Hello, my name is ${pokemon.nome} and my name in Japanase is ${pokemon.nome_japones}.`) 

Para o caso abaixo, é declarada uma função que retorna os valores solicitados via `this...` */
pokemon.hello_name = function () {
    console.log(`Hello, my name is ${this.nome} and my name in Japanase is ${this.nome_japones}.`)
}



// 3. Adicione uma nova propriedade ao seu pokemon chamada `can_fly` (ou algo do tipo) e defina ela como `true` ou `false`.
pokemon.can_fly = false



// 4. Adicione um método ao seu pokemon chamado `fly` que retorna "Sorry, I can't fly" ou "Flyyyyiinnngggg!".
pokemon.fly = function () {
    if (this.can_fly == false) {
        return `Sorry, I can't fly!`
    } else {
        return `Flyyyyiinnngggg!`
    }
}



// 5. Adicione um método chamado `do_something` ao seu pokemon que retorna randomicamente uma das Strings "FIGHT", "BAG" ou "RUN".
pokemon.do_something = function () {
    const ds_i = [`FIGHT`, `BAG`, `RUN`]
    const ds_f = ds_i[Math.floor(ds_i.length * Math.random())]

    return ds_f
}



// 6. Adicione um método chamado `ask` ao seu pokemon que printa no console "What will < > do?" e retorna o resultado do metodo `do_something`.
pokemon.ask = function () {
    `What will ${pokemon.nome} do?
    R:`

    return `${pokemon.do_something()}`
}



// 7. Printe todas as propriedades do seu pokemon no console.
for (const all_prop in pokemon) {
    console.log(all_prop)
}



// 8. Printe todas as propriedades e seus respectivos valores no console no seguinte formato: <propriedade>: <valor>
for (const all_prop in pokemon) {
    console.log(`${all_prop} : ${pokemon[all_prop]}`)
}



// 9. Crie uma função construtora de um pokémon genérico
function Pokemonzao(num_nacional,
    nome,
    nome_japones,
    evolui) {
    pokemonzinho.num_nacional = num_nacional
    this.num_nacional = num_nacional
    this.nome = nome
    this.nome_japones = nome_japones
    this.evolui = evolui
}

const pikachu = new Pokemon(25, `Pikachu`, `Pikachu`, `Raichu`)