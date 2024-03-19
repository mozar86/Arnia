//repository
const { Car } = require('./car')
const { carCollection, client } = require('./database')

class CarRepository {
    async create(data: object) {
        const car = new Car(data)
        const response = await carCollection.insertOne(car)
        console.log(response)
        client.close()
    }

    async list() {
        const cars = carCollection.find().toArray()
        return cars
    }
}

export = { CarRepository }

