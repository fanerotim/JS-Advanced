function cars(inputArr) {

    let output = {};
    let strToPrint = '';

    inputArr.forEach(line => {
        line = line.split(' ');
        let command = line.shift();

        switch(command) {
            case 'create':
                let newObjName = line.shift();

                if (line.length < 2) {
                    output[newObjName] = {};
                } else {
                    let prototypeObj = line.pop();
                    output[newObjName] = Object.create(output[prototypeObj]);
                }

                break;
            case 'set':
                let [target, key, value] = line.join(' ').split(' ');
                output[target][key] = value;
                break;
            case 'print':
                let objToPrint = line.shift();
                
                for (let key in output[objToPrint]) {
                    if (strToPrint === '') {
                        strToPrint += `${key}:${output[objToPrint][key]}`;
                    } else {
                        strToPrint += `,${key}:${output[objToPrint][key]}`;

                    }
                }
                console.log(strToPrint);
                strToPrint = '';
                break;
        }
    });
}

cars([
    'create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2'
]);