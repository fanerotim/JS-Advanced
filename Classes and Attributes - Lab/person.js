class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
let person2 = new Person('Petar', 'Cholakov', 35, 'petar.cholakov@yahoo.com');
console.log(person.toString());
console.log(person2.toString());
