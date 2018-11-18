//Diferença entre função construtora e classe

const teste = new Teste()
function Teste() {
    this.oi = `oi`
}

class Teste {
    constructor() {
        this.oi = `oi`
    }
}

const teste = new Teste()