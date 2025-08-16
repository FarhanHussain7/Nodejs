const http = require('http');

const server = http.createServer((req, res ) =>{
    console.log(req.method, req.url);

    res.write('<h1>welcome to server of http</h1>');
    res.end();
});
server.listen(5000, ()=>{
    console.log(`server is running on this http://localhost:5000`);   
});