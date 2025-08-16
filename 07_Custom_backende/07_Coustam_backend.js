const http = require("http");
const fs = require("fs");
const { url } = require("inspector");

const port = 3000;
const hostname = "127.0.0.1";
const home = fs.readFileSync(
  "C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Home.html"
);
const register = fs.readFileSync(
  "C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Register.html"
);
const login = fs.readFileSync(
  "C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Register.html"
);

const server = http.createServer((req, res) => {
  console.log(req.url);
  url = req.url;
  res.statusCode = 404;
  res.setHeader("content-type", "text/html");
  // res.end("this is cumstam class");

  if (
    url ==
    "C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Home.html"
  ) {
    res.end(home);
  } else if (
    url ==
    "C:/Users/hp/Desktop/New Folder/Nodejs/SEVEN_Custom_backende/Register.html"
  ) {
    res.end(register);
  } else {
    res.end(home);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server is Runing on http://${hostname}:${port}/`);
});
