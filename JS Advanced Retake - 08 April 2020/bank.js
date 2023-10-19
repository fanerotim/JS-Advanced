class Bank {

    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {

        for (let curCustomer of this.allCustomers) {
            if (curCustomer.personalId === customer.personalId) {
                throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`)
            }
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {

        for (let curCustomer of this.allCustomers) {
            if (curCustomer.personalId === personalId) {

                if (!curCustomer.hasOwnProperty('totalMoney')) {
                    curCustomer['totalMoney'] = 0;
                }

                if (!curCustomer.hasOwnProperty('transactions')) {
                    curCustomer['transactions'] = [];
                }

                let currentTransaction = {
                    number: curCustomer.transactions.length + 1,
                    name: `${curCustomer.firstName} ${curCustomer.lastName}`,
                    type: 'deposit',
                    sum: amount
                }
                curCustomer.totalMoney += amount;
                curCustomer.transactions.push(currentTransaction);
                return `${curCustomer.totalMoney}$`
            }
        }
        throw new Error(`We have no customer with this ID!`)
    }

    withdrawMoney(personalId, amount) {

        for (let curCustomer of this.allCustomers) {
            if (curCustomer.personalId === personalId) {
                if (curCustomer.totalMoney >= amount) {
                    curCustomer.totalMoney -= amount;

                    let curTransaction = {
                        number: curCustomer.transactions.length + 1,
                        name: `${curCustomer.firstName} ${curCustomer.lastName}`,
                        type: 'withdraw',
                        sum: amount
                    }

                    curCustomer.transactions.push(curTransaction);
                    return `${curCustomer.totalMoney}$`;
                }
                throw new Error(`${curCustomer.firstName} ${curCustomer.lastName} does not have enough money to withdraw that amount!`)
            }
        }
        throw new Error(`We have no customer with this ID!`);
    }

    customerInfo(personalId) {
        let output = '';
        let transactionsOutputArr = [];

        for (let curCustomer of this.allCustomers) {
            if (curCustomer.personalId === personalId) {
                output += `Bank name: ${this._bankName}\n`;
                output += `Customer name: ${curCustomer.firstName} ${curCustomer.lastName}\n`;
                output += `Customer ID: ${curCustomer.personalId}\n`;
                output += `Total Money: ${curCustomer.totalMoney}$\n`;
                output += `Transactions:\n`;
                
                for (let i = curCustomer.transactions.length; i > 0; i--) {
                    let transaction = curCustomer.transactions[i - 1];
                    let [fName, lName] = transaction.name.split(' ');
                    if (transaction.type === 'deposit') {
                        transactionsOutputArr.push(`${transaction.number}. ${fName} ${lName} made deposit of ${transaction.sum}$!`)
                    } else if (transaction.type === 'withdraw') {
                        transactionsOutputArr.push(`${transaction.number}. ${fName} ${lName} withdrew ${transaction.sum}$!`)
                    }
                }
                output += transactionsOutputArr.join('\n')
                return output;
            }
        }
        throw new Error(`We have no customer with this ID!`)
    }
}

let bank = new Bank("SoftUni Bank");

console.log(bank.newCustomer({ firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267 }));
console.log(bank.newCustomer({ firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596 }));
bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596, 555);
console.log(bank.withdrawMoney(6233267, 125));
console.log(bank.customerInfo(6233267));