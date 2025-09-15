const {EventEmitter} = require('events');

class TicketManager extends EventEmitter{
    ticketCount;
    constructor(ticketCount){
        super();
        this.ticketCount = ticketCount;
    }
    buy(email, price){
        if(this.ticketCount > 0){
            this.ticketCount--;
            this.emit('buyTicket', email, price, new Date().toLocaleTimeString());
        }else{
            this.emit('NoTicketAvailable', new Error(`No tickets left to book for ${email} at ${new Date().toLocaleTimeString()}`));
        }
    }
}

module.exports = TicketManager;