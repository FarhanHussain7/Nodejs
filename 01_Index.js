const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  //res.end('Hello World i am farhan hussain');
  res.end("this is new");
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// For stoping the server just type crtl+C in terminal

// for going of chrome server than you have to press ctrl + click in mouse both on the link of http://127.0.0.1:3000/

// if you click tag double time in REPL(type- node in terminal) ethen it will show all object and imports
