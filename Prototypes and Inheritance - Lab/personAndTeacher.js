function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }
    }

    return {
        Person,
        Teacher
    }
}

let test = new Person('Pesho', 'pesho@abv.bg')
let secondTest = new Teacher('mathematics')
console.log(Teacher.name);
