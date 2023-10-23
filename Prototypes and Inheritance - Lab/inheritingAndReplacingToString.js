function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
            this.className = 'Person';
        }
    }

    Person.prototype.toString = function() {
        return `${this.className} (name: ${this.name}, email: ${this.email})`
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
            this.className = 'Teacher';
        }

        toString() {
            Person.toString() + `, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
            this.className = 'Student';
        }

        toString() {
            Person.toString() + `, course: ${this.course})`;
            
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

personAndTeacher()
// let test = new Student('Pesho', 'petar@gmail.com', 'JS')
// console.log(test.toString());

