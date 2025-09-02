const http  = require('http');
const users = require('./users.json');
const { json } = require('stream/consumers');


const server = http.createServer((req, res) =>{
    const {url, method} = req;
    let userId = +req.url.split('users/').pop();

    if(url === '/'){
        res.write("Home Page... ");
    }
    if(url === '/users' && method === 'GET') {
        res.write(JSON.stringify(users));
    }else if(url.includes('/users') && method === 'GET' && userId){
        let userData = users.find(user => user.id === userId);
        res.write(JSON.stringify(userData));
    }else if(url.includes('/users') && method === 'POST'){
        res.write("<h1>User inserted successfully </h1>");
    }else if(url.includes('/users') && method === 'PUT'){
        res.write("<h1>User updated successfully </h1>");
    }else if(url.includes('/users') && method === 'DELETE'){
        res.write("<h1>User deleted successfully </h1>");
    }
    res.end();
});

server.listen(5000, ()=>{
    console.log(`server is running on this server http://localhost:5000`);
});