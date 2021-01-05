function solveClasses() {
  class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.problems = [];
    }

    toString() {
      return `${this.firstName} ${this.lastName} is part of SoftUni community now!`;
    }
  }

  class Teacher extends Person {
    constructor(firstName, lastName) {
      super(firstName, lastName);
    }

    createProblem(id, difficulty) {
      let problem = { id, difficulty };

      this.problems.push(problem);

      return this.problems;
    }

    getProblems() {
      return this.problems;
    }

    showProblemSolution(id) {
      let currentProblem = this.problems.find((x) => x.id === id);

      if (!currentProblem) {
        throw new Error(`Problem with id ${ id } not found.`);
      }

      currentProblem.difficulty--;
      return currentProblem;
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, graduationCredits, problems) {
      super(firstName, lastName, problems);
      this.graduationCredits = graduationCredits;
      this.myCredits = 0;
      this.solvedProblems = [];
      this.problems = problems;
    }

    solveProblem(id) {
      let currentProblem = this.problems.find((x) => x.id === id);

      if (!currentProblem) {
        throw new Error(`Problem with id ${id} not found.`);
      }

      let currentProblemDifficulity = currentProblem.difficulty;

      let isThisProblemSolved = this.solvedProblems.find((x) => x.id == id);

      if (!isThisProblemSolved) {
        this.myCredits += currentProblemDifficulity;
        this.solvedProblems.push(currentProblem);
      }

      return this.myCredits;
    }

    graduate() {
      if (this.myCredits >= this.graduationCredits) {
        return `${this.firstName} ${this.lastName} has graduated succesfully.`;
      }

      let neededCredit = this.graduationCredits - this.myCredits;

      return `${this.firstName} ${this.lastName}, you need ${neededCredit} credits to graduate.`;
    }
  }

  return {
    Person,
    Teacher,
    Student,
  };
}

const classes = solveClasses();
const teacher = new classes.Teacher("Ivailo", "Papazov");
teacher.createProblem("as442df", 5);
console.log(teacher.problems);

teacher.createProblem("ffff44", 15);
console.log(teacher.problems);

teacher.showProblemSolution("as442df");
console.log(teacher.problems);

// const classes = solveClasses();
const student = new classes.Student("Pesho", "Petrov", 23, [
  { id: "111", difficulty: 5 },
  { id: "222", difficulty: 15 },
]);

student.solveProblem("111");
console.log(student.myCredits);
console.log(student.graduate());

student.solveProblem("222");
console.log(student.solvedProblems);
console.log(student.graduate());
