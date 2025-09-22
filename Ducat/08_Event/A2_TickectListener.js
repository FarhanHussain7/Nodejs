const {EventEmitter} = require('events');
const TicketManager = require('./A1_Train_Manager');
const EmailService = require('./A3_Ticket_EmailService');
const { error } = require('console');

let ticketManager = new TicketManager(2);
let emailService = new EmailService();

ticketManager.on('buyTicket', function f1(person, price, time){
    console.log(`${person} booked a ticket for Rupees: ${price} at ${time}`);
    emailService.send(person);
})

// ticketManager.on('buyTicket', function f2(person, price, time){
//     console.log(`${person} booked a ticket for ${price} at ${time}`);
//     emailService.send(person);
// })

ticketManager.on('NoTicketAvailable', (error) => {
    console.error('Custom Event Triggered:', error.message);
});

console.log(ticketManager.eventNames());
console.log(ticketManager.getMaxListeners());

ticketManager.buy('srini@gmail.com', 200);
ticketManager.buy('sanjay@gmail.com', 300);
ticketManager.buy('ajay@gmail.com', 300);
