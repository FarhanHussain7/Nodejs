// synchronus or blocking
// - line by line execution
//Asynchronus or non-blocking
// line by line execution not guaranteed
// call back fundtion will fire

const fs = require("fs");

//fs.readFileSync(/filepath)-- this is blocking line it will read first if there is an error than hole program wll stop
fs.readFile("Module_example.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("this is a message");
