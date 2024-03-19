//entity
class Car {
    model: string
    releaseAt: number
    brand: string
    price: number
    status: string | string

    constructor(data: object) {
        this.model = data.model
        this.releaseAt = data.releaseAt
        this.brand = data.brand
        this.price = data.price
        this.status = data.status
    }
}

export = { Car }