const http  = require('http');
const users = require('./users.json');
const { log } = require('console');

const server = http.createServer((req, res) =>{
    res.write(JSON.stringify(users));
    res.end();
});

server.listen(5000, ()=>{
    console.log(`server is running on this server http://localhost:5000`);
});