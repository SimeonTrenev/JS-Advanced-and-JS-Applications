class Company {
    constructor() {
        this.departments = []
    }

    addEmployee(name, salary, position, department) {
        this.validation(name)
        this.validation(salary)
        this.validationForSalary(salary)
        this.validation(position)
        this.validation(department)

        if(!this.departments[department]){
            this.departments[department] = []
        }

        this.departments[department].push({
            name,
            salary,
            position
        })

        return `New employee is hired. Name: ${name}. Position: ${position}`
    }
    

    bestDepartment() {
        
        //department = average salary

        let departments = {};

        Object.entries(this.departments).forEach(([department, empoloyees]) => {
           let totalSalary = empoloyees
           .map((e) => e.salary)
           .reduce((acc, curr) => (acc += curr));

           departments[department] = totalSalary / empoloyees.length
        })

        let maxSalary = 0;
        let bestDepartment;

        Object.entries(departments).forEach(([department, avgSalary]) => {
            if(avgSalary > maxSalary){
                maxSalary = avgSalary
                bestDepartment = department
            }
        });

        let output = `Best Department is: ${bestDepartment}\nAverage salary: ${departments[bestDepartment].toFixed(2)}\n`

        this.departments[bestDepartment]
        .sort((a,b) => b.salary - a.salary || a.name.localeCompare(b.name))
        .forEach((e) => {
            output += `${e.name} ${e.salary} ${e.position}\n`
        })

        return output.trim()
    }



    validation (something) {
        if(something === '' || something === undefined || something === null){
            throw new Error('Invalid input!')
        }
    }

    validationForSalary (salary) {
        if(salary < 0) {
            throw new Error('Invalid input!')
        }
    }

   
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
