const express = require('express');
const server = express();

server.get('/', (req, res)=>{
    res.send("Hello Home Page");    
});
server.get('/users', (req, res)=>{
    res.send("<h1>Users page </h1>");    
});
server.get('/user/:id', (req, res)=>{
    res.send("<h1>User with Id </h1>");    
});
server.post('/users', (req, res)=>{
    res.send("This is post request ");    
});
server.put('/users/:id', (req, res)=>{
    res.send("<h1> This is Update Request </h1>");    
});
server.delete('/users/:id', (req, res)=>{
    res.send("<h1>This is delete request </h1>");    
});


server.listen(5000, ()=>{
    console.log(`server running at this server http://localhost:5000`);
});
