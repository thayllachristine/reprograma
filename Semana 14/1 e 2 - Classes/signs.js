class Name {
    constructor(name) {
        this.name = name
    }
}

class Sign extends Name {
    constructor(solar, lunar, ascendant) {
        super(solar, lunar, ascendant)

        this.solar = solar
        this.lunar = lunar
        this.ascendant = ascendant
    }
}