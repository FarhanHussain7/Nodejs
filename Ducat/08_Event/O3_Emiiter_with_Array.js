const {EventEmitter} = require('events');
const eventEmitter = new EventEmitter();

const cars = ['tata', 'honda', 'toyota'];

eventEmitter.addListener('addFirst', function (car){  
    cars.unshift(car);
    console.log(cars);
})

eventEmitter.on('deleteFirst', function (car){  
    cars.shift(car);
    console.log(cars);
})

eventEmitter.on('addlast', function (car){  
    cars.push(car);
    console.log(cars);
})

eventEmitter.on('deletelast', function (car){  
    cars.pop(car);
    console.log(cars);
})

eventEmitter.emit('deleteFirst', "Maheindra"); // trigering a custom event 

console.log(eventEmitter.listenerCount('addFirst'));