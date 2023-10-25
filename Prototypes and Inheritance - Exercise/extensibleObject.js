function extensibleObject() {

    let myObj = {
        extend(template) {     
            Object.assign(myObj, template);
            Object.setPrototypeOf(myObj, template);
        }
    };
    return myObj;
}



const myObj = extensibleObject();

const template = {
    extensionMethod: function () { },
    extensionProperty: 'someString'
};

myObj.extend(template); 
console.log(myObj)