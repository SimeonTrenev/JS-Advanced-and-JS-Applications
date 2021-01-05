class Parking {
    constructor(capacity) {
      this.capacity = capacity;
      this.vehicles = [];
      this.momentCars = 0;
    }
  
    addCar(carModel, carNumber) {
      if (this.capacity <= this.momentCars) {
        throw new Error(`Not enough parking space.`);
      }
  
      let currentCar = {
        carModel,
        carNumber,
        payed: false,
      };
  
      this.vehicles.push(currentCar);
      this.momentCars++;
  
      return `The ${carModel}, with a registration number ${carNumber}, parked.`;
    }
  
    removeCar(carNumber) {
      let searchedCar = this.vehicles.find((x) => x.carNumber === carNumber);
  
      if (!searchedCar) {
        throw new Error(`The car, you're looking for, is not found.`);
      }
  
      this.momentCars--;
  
      if (searchedCar) {
        if (searchedCar.payed === false) {
          throw new Error(
            `${carNumber} needs to pay before leaving the parking lot.`
          );
        } else {
          let index = this.vehicles.indexOf(searchedCar);
          this.vehicles.splice(index, 1);
          return `${carNumber} left the parking lot.`;
        }
      }
    }
  
    pay(carNumber) {
      let searchedCar = this.vehicles.find((x) => x.carNumber === carNumber);
  
      if (!searchedCar) {
        throw new Error(`${carNumber} is not in the parking lot.`);
      }
  
      if (searchedCar) {
        if (searchedCar.payed === true) {
          throw new Error(
            `${carNumber}'s driver has already payed his ticket.`
          );
        } else {
          searchedCar.payed = true;
          return `${carNumber}'s driver successfully payed for his stay.`;
        }
      }
    }
  
    getStatistics(carNumber) {
      if (!carNumber) {
        let result = [];
        result.push(
          `The Parking Lot has ${
            this.capacity - this.momentCars
          } empty spots left.`
        );
        let sorted = this.vehicles.sort((a, b) =>
          a.carModel.localeCompare(b.carModel)
        );
        sorted.forEach((vehicle) => {
          result.push(
            `${vehicle.carModel} == ${vehicle.carNumber} - ${
              vehicle.payed ? "Has payer" : "Not payed"
            }`
          );
        });
        return result.join("\n");
      }else {
          let currentCar = this.vehicles.find(x => x.carNumber === carNumber)
          
          return `${currentCar.carModel} == ${currentCar.carNumber} - ${currentCar.payed ? 'Has payed' : 'Not payed'}`
      }
    }
  }
  
  const parking = new Parking(12);
  
  console.log(parking.addCar("Volvo t600", "TX3691CA"));
  console.log(parking.getStatistics());
  
  console.log(parking.pay("TX3691CA"));
  console.log(parking.removeCar("TX3691CA"));