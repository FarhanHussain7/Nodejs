const fs = require("fs");

//let text = fs.readFileSync("C:\\Users\\hp\\Desktop\\Module_example.txt", "utf-8" );


let text = "this is used to create a file and save data in it";
fs.writeFileSync("yes_txt", text);
