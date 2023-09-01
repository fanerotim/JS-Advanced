function sortedList() {

    let myCollection = [];

    let myObj = {

        size: 0,
        add: (num) =>  {
            myCollection.push(num);
            myCollection.sort((a, b) => a - b);
            myObj.size = myCollection.length;
        },
        remove: (index) => {
            if (index >= 0 && index < myCollection.length) {
                myCollection.splice(index, 1);
                myObj.size = myCollection.length;
            }
        },
        get: (index) => {
            if (index >= 0 && index < myCollection.length) {
                return myCollection[index];
            }
        }  
    }
    return myObj;
}

sortedList()