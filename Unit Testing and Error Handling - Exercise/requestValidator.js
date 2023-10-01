function requestValidator(obj) {

    // let uriPattern = /^[A-Za-z0-9\.\*]+$/g;
    let uriPattern = /[^A-Za-z0-9\.\*]+/;
    // let messagePattern = /[<>\\\&\'\"]+/;
    let messagePattern = /[<>\\\&\'\"]+/;
    let missingProperties = [];

    for (let i = 0; i < 4; i++) {
        if (i === 0) {
            if (!obj.hasOwnProperty('method')) {
                missingProperties.push('Method');
            }
        } else if (i === 1) {
            if (!obj.hasOwnProperty('uri')) {
                missingProperties.push('URI');
            }
        } else if (i === 2) {
            if (!obj.hasOwnProperty('version')) {
                missingProperties.push('Version');
            }
        } else {
            if (!obj.hasOwnProperty('message')) {
                missingProperties.push('Message');
            }
        }
    }

    if (missingProperties.length > 0) {
        throw new Error(`Invalid request header: Invalid ${missingProperties[0]}`);
    }

    switch (obj.method) {
        case 'GET':
            break;
        case 'POST':
            break;
        case 'DELETE':
            break;
        case 'CONNECT':
            break;
        default:
            throw new Error(`Invalid request header: Invalid Method`);
    }

    if (obj.uri.match(uriPattern) || obj.uri == '') {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    switch (obj.version) {
        case 'HTTP/0.9':
            break;
        case 'HTTP/1.0':
            break;
        case 'HTTP/1.1':
            break;
        case 'HTTP/2.0':
            break;
        default:
            throw new Error(`Invalid request header: Invalid Version`)
    }

    if (obj.message.match(messagePattern) && obj.message !== '') {
        throw new Error(`Invalid request header: Invalid Message`)
    }
    // console.log(obj)
    return obj;
}

// requestValidator({
//     method: 'GET',
//     uri: 'svn.public.catalog',
//     version: 'HTTP/1.1',
//     message: ''
// });

// requestValidator({
//     method: 'OPTIONS',
//     uri: 'git.master',
//     version: 'HTTP/1.1',
//     message: '-recursive'
// })

// requestValidator({
//     method: 'POST',
//     uri: 'home.bash',
//     message: 'rm -rf /*'
// })

requestValidator({
    method: 'POST',
    version: 'HTTP/2.0',
    message: 'rm -rf /*'
});