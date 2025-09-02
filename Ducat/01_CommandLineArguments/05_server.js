const http = require('http');
const PORT = process.argv[2] || 5000;

const server = http.createServer((req, res)=>{
    res.write('<h1>This is the response from the server</h1>');
    res.closed();
});

server.listen(PORT, ()=>{console.log(`Server running at http://localhost:${PORT}`)});