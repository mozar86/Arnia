//index
const { CarRepository } = require("./CarRepository")

const carRepository = new CarRepository()

carRepository.create({
    model: string,
    releaseAt: number,
    brand: string,
    price: number,
    status: string | string
})


