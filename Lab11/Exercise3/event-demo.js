const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('userLogin', (username, role) => {
    console.log(`User logged in: ${username} as ${role}`);
});

myEmitter.on('userLogin', (username) => {
    console.log(`Sending welcome email to ${username}`);
});

myEmitter.on('orderPlaced', (order) => {
    console.log(`New order placed - ID: ${order.id}, Amount: ₹${order.amount}`);
});

myEmitter.once('serverStart', () => {
    console.log('Server started successfully');
});

myEmitter.on('fileUploaded', (filename, size, user) => {
    console.log(`File uploaded: ${filename} (${size} KB) by ${user}`);
});

console.log('Demonstrating Event-Driven Programming in Node.js\n');

myEmitter.emit('serverStart');
myEmitter.emit('userLogin', 'yasaswini', 'Student');
myEmitter.emit('orderPlaced', { id: 'ORD12345', amount: 2499 });
myEmitter.emit('fileUploaded', 'report.pdf', 2450, 'yasaswini');