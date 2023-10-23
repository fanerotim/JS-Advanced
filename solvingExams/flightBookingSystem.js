class FlightBookingSystem {

    constructor(agencyName) {
        this.agencyName = agencyName;
        this.flights = [];
        this.bookings = [];
        this.bookingsCount = 0;
    }

    addFlight(flightNumber, destination, departureTime, price) {

        for (let flight of this.flights) {
            if (flight.flightNumber === flightNumber) {
                return `Flight ${flightNumber} to ${destination} is already available.`
            }
        }

        let newFlight = {
            flightNumber,
            destination,
            departureTime,
            price
        }

        this.flights.push(newFlight);
        return `Flight ${flightNumber} to ${destination} has been added to the system.`
    }

    bookFlight(passengerName, flightNumber) {

        for (let flight of this.flights) {
            if (flight.flightNumber === flightNumber) {

                let curPrice = flight.price;

                let newBooking = {
                    passengerName,
                    flightNumber,
                    price: curPrice
                }
                this.bookings.push(newBooking);
                this.bookingsCount++;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is confirmed.`
            }
        }
        return `Flight ${flightNumber} is not available for booking.`
    }

    cancelBooking(passengerName, flightNumber) {

        for (let booking of this.bookings) {
            if (booking.passengerName === passengerName && booking.flightNumber === flightNumber) {
                let bookingIndex = this.bookings.indexOf(booking);
                let removedBookingArr = this.bookings.splice(bookingIndex, 1);
                this.bookingsCount--;
                return `Booking for passenger ${passengerName} on flight ${flightNumber} is cancelled.`;
            }
        }
        throw new Error(`Booking for passenger ${passengerName} on flight ${flightNumber} not found.`);
    }

    showBookings(criteria) {

        if (this.bookings.length === 0) {
            throw new Error(`No bookings have been made yet.`)
        }

        let bookingOutputArr = [];

        switch (criteria) {
            case 'all':
                let outputAll = `All bookings(${this.bookings.length}):\n`;

                for (let booking of this.bookings) {
                    bookingOutputArr.push(`${booking.passengerName} booked for flight ${booking.flightNumber}.`)
                }
                outputAll += bookingOutputArr.join('\n');
                return outputAll;

            case 'cheap':
                let outputCheap = `Cheap bookings:\n`
                let isFound = false;
                for (let cheapBooking of this.bookings) {
                    if (cheapBooking.price <= 100) {
                        isFound = true;
                        bookingOutputArr.push(`${cheapBooking.passengerName} booked for flight ${cheapBooking.flightNumber}.`)
                    }
                }

                if (isFound === false) {
                    return 'No cheap bookings found.'
                }

                outputCheap += bookingOutputArr.join('\n');
                return outputCheap;

            case 'expensive':
                let outputExpensive = `Expensive bookings:\n`
                let isPresent = false;

                for (let expensiveBooking of this.bookings) {
                    if (expensiveBooking.price > 100) {
                        isPresent = true;
                        bookingOutputArr.push(`${expensiveBooking.passengerName} booked for flight ${expensiveBooking.flightNumber}.`)
                    }
                }

                if (isPresent === false) {
                    return 'No expensive bookings found.'
                }
                outputExpensive += bookingOutputArr.join('\n')
                return outputExpensive;
        }
    }
}

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.addFlight("CC303", "Chicago", "11:45 AM", 120));
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.bookFlight("Charlie", "CC303"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.cancelBooking("Alice", "AA101"));

// const system = new FlightBookingSystem("TravelWorld");
// console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
// console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
// console.log(system.bookFlight("Alice", "AA101"));
// console.log(system.bookFlight("Bob", "BB202"));
// console.log(system.showBookings("all"));

const system = new FlightBookingSystem("TravelWorld");
console.log(system.addFlight("AA101", "Los Angeles", "09:00 AM", 250));
console.log(system.addFlight("BB202", "New York", "10:30 AM", 180));
console.log(system.bookFlight("Alice", "AA101"));
console.log(system.bookFlight("Bob", "BB202"));
console.log(system.showBookings("expensive"));
console.log(system.showBookings("cheap"));

