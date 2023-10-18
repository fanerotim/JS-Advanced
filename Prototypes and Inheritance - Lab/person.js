function createPerson(firstName, lastName) {

    let myObj = { firstName, lastName }

    Object.defineProperty(myObj, 'fullName', {
        get: () => {
            return `${myObj.firstName} ${myObj.lastName}`;
        },
        set: (input) => {
           let [fName, lName] = input.split(' ');

           if (fName !== undefined && lName !== undefined) {
               myObj.firstName = fName;
               myObj.lastName = lName;
           }
        }
    });
    return myObj;
}

// let person = createPerson("Peter", "Ivanov");
// console.log(person.fullName); //Peter Ivanov
// person.firstName = "George";
// console.log(person.fullName); //George Ivanov
// person.lastName = "Peterson";
// console.log(person.fullName); //George Peterson
// person.fullName = "Nikola Tesla";
// console.log(person.firstName); //Nikola
// console.log(person.lastName); //Tesla

let person = createPerson("Albert", "Simpson");
console.log(person.fullName); //Albert Simpson
person.firstName = "Simon";
console.log(person.fullName); //Simon Simpson
person.fullName = "Peter";
console.log(person.firstName);  // Simon
console.log(person.lastName);  // Simpson

