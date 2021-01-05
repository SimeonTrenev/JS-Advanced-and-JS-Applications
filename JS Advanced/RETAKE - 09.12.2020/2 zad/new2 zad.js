class Vacation {
    constructor(organizer, destination, budget) {
        this.organizer = organizer;
        this.destination = destination;
        this.budget = budget;
        this.kids = {};
    }
 
    registerChild(name, grade, budget) {
        if (this.budget > budget) {
            return `${name}'s money is not enough to go on vacation to ${this.destination}.`;
        }
 
        if (!this.kids.hasOwnProperty(grade)) {
            this.kids[grade] = [];
        }
 
        for (let students of this.kids[grade]) {
            let nameOfKid = students.split("-")[0]
            if (nameOfKid === name) {
                return `${name} is already in the list for this ${this.destination} vacation.`;
            }
        }
 
        let dataForKid = `${name}-${budget}`;
        this.kids[grade].push(dataForKid);
        return this.kids[grade];
    }
 
    removeChild(name, grade) {
        if (!this.kids.hasOwnProperty(grade)) {
            return `We couldn't find ${name} in ${grade} grade.`
        }
 
        let index = 0;
        for (let students of this.kids[grade]) {
            let nameForKid = students.split("-")[0];
            index++;
            if (nameForKid === name) {
                this.kids[grade].splice(index, 1);
                return this.kids[grade];
            }
        }
 
        return `We couldn't find ${name} in ${grade} grade.`
    }
 
    toString() {
        if (this.numberOfChildren === 0) {
            return `No children are enrolled for the trip and the organization of ${this.organizer} falls out...`;
        }
 
        let result = `${this.organizer} will take ${numberOfChildren} children on trip to ${this.destination}\n`;
        this.kids = this.kids.sort((a, b) => {
            return Number(Object.keys(a)) - Number(Object.keys(b));
        });
 
        for (let key in this.kids) {
            result += `Grade: ${key}\n`
            let childNumber = 1;
            for (let student of this.kids[key]) {
                result += `${childNumber++}. ${student}\n`
            }
        }
 
        return result;
    }
 
    get numberOfChildren() {
        let count = 0;
        for (let grade in this.kids) {
            count += this.kids[grade].length;
        }
 
        return count;
    }
}