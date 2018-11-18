class Mulher {
    constructor(nome, signo, corCabelo, etnia) {
        this.nome = nome
        this.altura = 0.4
        this.signo = signo
        this.corCabelo = corCabelo
        this.idGenero = `F`
        this.etnia = etnia
        this.profissao = []
    }

    pintarCabelo(cor) {
        this.corCabelo = cor
    }

    contratar() {
        this.profissao.push(...arguments)
    }

    crescer() {
        let novaAltura = this.altura + 0.01
        this.altura = parseFloat(novaAltura.toFixed(2))
    }
}