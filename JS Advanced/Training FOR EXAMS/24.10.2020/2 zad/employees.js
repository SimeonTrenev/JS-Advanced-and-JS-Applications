function solveClasses() {
  class Developer {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.baseSalary = 1000;
      this.tasks = [];
      this.experience = 0;
    }

    addTask(id, taskName, priority) {
      let newTask = { id, taskName, priority };

      if (newTask.priority === "high") {
        this.tasks.unshift(newTask);
      } else {
        this.tasks.push(newTask);
      }

      return `Task id ${newTask.id}, with ${newTask.priority} priority, has been added.`;
    }

    doTask() {
      if (this.tasks.length > 0) {
        let firstTask = this.taskName.splice(0, 1);
        return firstTask.taskName;
      } else {
        return `${this.firstName}, you have finished all your tasks. You can rest now.`;
      }
    }

    getSalary() {
      return `${this.firstName} ${this.lastName} has a salary of: ${this.baseSalary}`;
    }

    reviewTasks() {
      let result = [];
      if (this.tasks.length > 0) {
        result.push(`Tasks, that need to be completed:`);
        for (let elements of this.tasks) {
          result.push(
            `${elements.id}: ${elements.taskName} - ${elements.priority}`
          );
        }
      }
      return result.join("\n");
    }
  }

  class Junior extends Developer {
    constructor(firstName, lastName, bonus, experience) {
      super(firstName, lastName);
      this.baseSalary = 1000 + bonus;
      this.tasks = [];
      this.experience = experience;
      this.bonus = bonus;
    }

    learn(years) {
      this.experience += years;
    }
  }

  class Senior extends Developer {
    constructor(firstName, lastName, bonus, experience) {
      super(firstName, lastName);
      this.baseSalary += bonus;
      this.tasks = [];
      this.experience = experience + 5;
      this.bonus = bonus;
    }

    changeTaskPriority(taskId) {
      let currentTask = this.tasks.find((x) => x.id === taskId);

      if (currentTask.priority === "high") {
        this.tasks.shift(currentTask);
        currentTask.priority = "low";
        this.tasks.push(currentTask);
      } else {
        this.tasks.pop(currentTask);
        currentTask.priority = "high";
        this.tasks.unshift(currentTask);
      }
      return currentTask;
    }
  }

  return {
    Developer,
    Junior,
    Senior,
  };
}
let classes = solveClasses();
const developer = new classes.Developer("George", "Joestar");
console.log(developer.addTask(1, "Inspect bug", "low"));
console.log(developer.addTask(2, "Update repository", "high"));
console.log(developer.reviewTasks());
console.log(developer.getSalary());

const junior = new classes.Junior("Jonathan", "Joestar", 200, 2);
console.log(junior.getSalary());

const senior = new classes.Senior("Joseph", "Joestar", 200, 2);
senior.addTask(1, "Create functionality", "low");
senior.addTask(2, "Update functionality", "high");
console.log(senior.changeTaskPriority(1)["priority"]);
