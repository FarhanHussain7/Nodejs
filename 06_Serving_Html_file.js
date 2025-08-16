const http = require("http");
const fs = require("fs");
const filecontent = fs.readFileSync("embed.html");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "content-type": "text/html" });
  res.end(filecontent);
});

server.listen(80, "127.0.0.2", () => {
  console.log("Listebubg on port 80");
});

// If the code is run succesfully than go to chrome and type the IP address "127.0.0.2"
