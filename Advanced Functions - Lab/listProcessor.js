function listProcessor(arr) {

    let inputArr = arr.slice(0);
    let output = [];

    let commands = {

        add: (input) => {
            output.push(input);
        },
        remove: (input) => {
            output = output.filter(string => string !== input);
        },
        print: () => {
            console.log(output.join(','));
        }
    }

    inputArr.forEach(el => {
        let [command, string] = el.split(' ');
        if (command === 'add') {
            commands.add(string);
        } else if (command === 'remove') {
            commands.remove(string);
        } else {
            commands.print();
        }
    });
}

listProcessor(['add hello', 'add again', 'remove hello', 'add again', 'print']);
listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);