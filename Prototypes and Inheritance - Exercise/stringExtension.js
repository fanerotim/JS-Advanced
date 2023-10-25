(function solve() {

    let pattern = /\{[0-9]\}/g;

    String.prototype.ensureStart = function (str) {

        if (!this.toString().startsWith(str)) {
            return str + this;
        }
        return this.toString();
    }

    String.prototype.ensureEnd = function (str) {

        if (!this.toString().endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }

    String.prototype.isEmpty = function () {
        if (this.toString() === '') {
            return true;
        }
        return false;
    }

    String.prototype.truncate = function (n) {
        let strToPrint = '';

        if (this.length <= n) {
            return this.toString();
        } else if (this.length > n) {

            if (this.includes(' ')) {

                strToPrint = this.toString();

                let lastIndex;

                while (lastIndex !== -1) {
                    lastIndex = strToPrint.lastIndexOf(' ');
                    strToPrint = strToPrint.substring(0, lastIndex);
                    
                    if (strToPrint.length + 3 <= n) {
                        return strToPrint + '...';
                    }
                }

                return strToPrint += '...';
            } else if (!this.includes(' ')) {

                if (n < 4) {
                    strToPrint = '';
                    for (let i = 0; i < n; i++) {
                        strToPrint += '.';
                    }
                    return strToPrint;
                }

                strToPrint = '';
                strToPrint = this.substring(0, n - 3);
                return strToPrint += '...';
            }
        }
    }

    String.format = function (string, ...params) {

        let outputArr = string.split(' ');

        for (let param of params) {

            for (let word of outputArr) {
                if (word.match(pattern)) {
                    let wordIndex = outputArr.indexOf(word);
                    outputArr[wordIndex] = param;
                    break;
                }
            }
        }
        return outputArr.join(' ');
    }

    // let str = 'Pesho Is Solving';
    // console.log(str = str.truncate(1));

    // console.log(str = str.truncate(3));
    // console.log(str = str.ensureStart('new'))
    // console.log(str = str.truncate(5));
    // console.log(str = str.ensureStart('myAss'));
    // console.log(str = str.truncate(5));
    // console.log(str = str.truncate(3));
    // console.log(str = str.ensureStart('is it good'));
    // console.log(str = str.truncate());

    // let str = 'my string';
    // console.log(str = str.ensureStart('my'));
    // console.log(str = str.ensureStart('hello '));
    // console.log(str = str.truncate(16));
    // console.log(str = str.truncate(14));
    // console.log(str = str.truncate(8));
    // console.log(str = str.truncate(4));
    // console.log(str = str.truncate(2));

    // console.log(str = String.format('The {0} {1} fox',
    //     'quick', 'brown'));

    // console.log(str = String.format('jumps {0} {1}',
    //     'dog'));
})();