function personAndTeacher() {

    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString = function () {
            return `${this.className} (name: ${this.name}, email: ${this.email})`
        }

    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            return base + `, subject: ${this.subject})`
        }
    }

    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            return Person.toString + `, course: ${this.course})`
        }
    }

    return {
        Person,
        Teacher,
        Student
    }
}

