function Mulher(nome, signo, corCabelo, etnia) {
    this.nome = nome
    this.altura = 0.4
    this.signo = signo
    this.corCabelo = corCabelo
    this.idGenero = `F`
    this.etnia = etnia
    this.profissao = []


    this.pintarCabelo = function (cor) {
        this.corCabelo = cor
    }

    this.contratar = function () {
        this.profissao.push(...arguments)
    }

    this.crescer = function () {
        let novaAltura = this.altura + 0.01
        this.altura = parseFloat(novaAltura.toFixed(2))
    }
}