class Vacation {
  constructor(organizer, destination, budget) {
    this.organizer = organizer;
    this.destination = destination;
    this.budget = budget;
    this.kids = {};
  }

  registerChild(name, grade, budget) {
    if (budget < this.budget) {
      return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
    }

    this.kids[grade] = [name, budget];

    if (this.kids[grade].includes(name)) {
      return `${this.kids[grade].name} is already in the list for this ${this.destination} vacation.`;
    }
    return this.kids[grade];
  }

  removeChild(name, grade) {
    if (this.kids[grade].includes(name)) {
      let index = this.kids[grade].indexOf(name);
      this.kids[grade].splice(index, 1);
      return this.kids[grade];
    }
    return `We couldn't find ${name} in ${grade} grade.`;
  }

  numberOfChildren() {
    return Object.keys(this.kids).length;
  }

  toString() {
    let result = [];
    if(Object.keys(this.kids).length > 0){
    let currentObject = Object.keys(this.kids)
      .sort((a, b) => a - b)
      .forEach((child) => {
        result.push(
            `${this.organizer} will take ${Object.keys(this.kids).length} children on trip to ${
              this.destination
            }`
          );
          result.push(`Grade: ${child}`);
          result.push(`${child}. ${name}`)
      });
    }else{
        return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`
    }
  }
}

let vacation = new Vacation("Mr Pesho", "San diego", 2000);
vacation.registerChild("Gosho", 5, 2000);
vacation.registerChild("Lilly", 6, 2100);

console.log(vacation.removeChild("Gosho", 9));

vacation.registerChild("Pesho", 6, 2400);
vacation.registerChild("Gosho", 5, 2000);

console.log(vacation.removeChild("Lilly", 6));
console.log(vacation.registerChild("Tanya", 5, 6000));
vacation.toString();
