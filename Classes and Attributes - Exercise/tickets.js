function tickets(arr, criteria) {

    let result = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = Number(price);
            this.status = status;
        }
    }

    for (let item of arr) {
        let [destination, price, status] = item.split('|');
        price = price;

        let curInstance = new Ticket(destination, price, status); 
        price = price;
        result.push(curInstance); 
    }

    if (criteria === 'destination') {
        return result.sort((a, b) => a.destination.localeCompare(b.destination));
    } else if (criteria === 'status') {
        return result.sort((a, b) => a.status.localeCompare(b.status));
    } else if (criteria === 'price') {
        return result.sort((a, b) => a.price - b.price);
    }
}

// console.log(tickets([
//     'Philadelphia|94.20|available',
//     'New York City|95.99|available',
//     'New York City|95.99|sold',
//     'Boston|126.20|departed'],
//     'destination'));

// console.log(tickets(['Philadelphia|94.20|available',
// 'New York City|95.99|available',
// 'New York City|95.99|sold',
// 'Boston|126.20|departed'],
// 'status'));

console.log(tickets(['Philadelphia|94.20|available',
'New York City|95.99|available',
'New York City|95.99|sold',
'Boston|126.20|departed'],
'price'));