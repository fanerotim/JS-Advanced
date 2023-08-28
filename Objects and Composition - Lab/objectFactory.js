function objectFactory(library, orders) {

    let result = [];

    for (let key of orders) {
        let curObj = {name: key.template.name}
        for (let curFunc of key.parts) {
            let currentFunction = curFunc;
            curObj[currentFunction] = library[currentFunction]; 
        }
        result.push(curObj);
    }
    return result;
}

objectFactory();