class point {
    constructor(x, y) {
        this.x = x
        this.y = y

        console.log(`X: ${this.x} / Y: ${this.y}`)
    }

    quadrant() {
        if (this.x > 0 && this.y > 0) {
            return `1º quadrante`
        } else if (this.x > 0 && this.y < 0) {
            return `2º quadrante`
        } else if (this.x < 0 && this.y < 0) {
            return `3º quadrante`
        } else {
            return `4º quadrante`
        }
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
        this.quadrant()
    }
}