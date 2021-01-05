class Person {
    static type = 'Homo Sapiens';
    #currentAge;
    prop = 'value';
 
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age || 0;
    }
 
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
 
    get age() {
        return this.#currentAge;
    }
 
    set age(value) {
        if (!(value < 0 || value > 120)) {
            this.#currentAge = value;
        } 
    } 
 
    static talk() {
        console.log('Blablablalba' + this.prop);
    }
 
    talk() {
        console.log('asdas1111');
    }
 
    greet() {
        console.log('Hello, my name is ');
    }
}
 
let person1 = new Person('Pesho', 'Petrov');
let person2 = new Person('Gosho', 'Ivanov', 22);
 
Person.talk()
person1.talk();



