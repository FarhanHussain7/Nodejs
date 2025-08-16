const http  = require('http');
const users = require('./users.json');
const { json } = require('stream/consumers');


const server = http.createServer((req, res) =>{
    const url = req.url;
    let userId = +req.url.split('users/').pop();
    if(url === '/users') {
        res.write(JSON.stringify(users));
    }
    if(url.includes('/users') && userId){
        let userData = users.find(user => user.id === userId);
        res.write(JSON.stringify(userData));
    }
    res.end();
});

server.listen(5000, ()=>{
    console.log(`server is running on this server http://localhost:5000`);
});