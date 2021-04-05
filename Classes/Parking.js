class Parking {
    constructor(capacity, vehicles = [], size) {
        this.capacity = capacity;
        this.vehicles = vehicles;
        this.size = 0;
    }

    addCar(carModel, carNumber) {
        if (this.size >= this.capacity) {
            throw new Error("Not enough parking space.")
        } else {
            this.size++;
            this.vehicles.push({
                carModelKey: carModel,
                carNumberKey: carNumber,
                payed: false
            })
            return `The ${carModel}, with a registration number ${carNumber}, parked.`
        }

    }
    removeCar(carNumber) {
        let neededCar = this.vehicles.find((x) => x.carNumberKey === carNumber)
        if (!neededCar) {
            throw new Error("The car, you're looking for, is not found.");
        } else if (neededCar.payed === false) {
            throw new Error(`${carNumber} needs to pay before leaving the parking lot.`)
        } else {
            return `${carNumber} left the parking lot.`
        }

    }
    pay(carNumber) {
        let neededCar = this.vehicles.find((x) => x.carNumberKey === carNumber)
        if (!neededCar) {
            throw new Error(`${carNumber} is not in the parking lot.`)
        }
        if (neededCar.payed === true) {
            throw new Error(`${carNumber}'s driver has already payed his ticket.`)
        } else {
            neededCar.payed = true;
            return `${carNumber}'s driver successfully payed for his stay.`
        }
    }
    getStatistics(carNumber) {
        let neededCara = this.vehicles.find((x) => x.carNumberKey === carNumber)
        
        if (neededCara) {
            return `${neededCara.carModelKey} == ${neededCara.carNumberKey} - ${neededCara.payed ? `Has payed`: `Not payed`}`
            
        }
        else{
            let result = [`The Parking Lot has ${this.capacity - this.size} empty spots left.`]
            
            this.vehicles.sort((a,b)=>a.carModelKey.localeCompare(b.carModelKey)).map((x)=>result.push(`${x.carModelKey} == ${x.carNumberKey} - ${x.payed ? `Has payed`:`Not payed`}`));
            return result.join('\n');
        }
    }
}
const parking = new Parking(12);

console.log(parking.addCar("Volvo t600", "TX3691CA"));
console.log(parking.getStatistics("TX3691CA"));

console.log(parking.pay("TX3691CA"));
console.log(parking.removeCar("TX3691CA"));