const http = require('http');
const users = require('./users.json');
const { json } = require('stream/consumers');

const server = http.createServer((req, res)=>{
   const url = req.url;
   if(url ==='/'){
    res.write(`
        <h1>You are in Home Route</h1> 
        <a href="http://localhost:5000/users">Users </a> get all users <br/><br/>
        <a href="http://localhost:5000/posts">Posts </a> get all Posts <br/><br/>
        <a href="http://localhost:5000/comments">Comments</a> get all comments <br/><br/> 
        `)
   }else if(url === '/users'){
    res.write(JSON.stringify(users));
   } else if(url === '/posts'){
    res.write('<h1>All Posts ......</h1>');
   } else if(url === '/comments'){
    res.write('<h1>All comments.....</h1>');
   }
    res.end();
});

server.listen(5000, ()=>{
    console.log(`server is running on this http://localhost:5000`);
});