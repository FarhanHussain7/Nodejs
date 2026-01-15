const { error } = require('console')
const fs = require('fs')

// Error first callbak
fs.readFile('C:/Users/HP/New folder/Nodejs/Ducat/03_Modules/O5_File_CRUD_System/File1.txt', (err, data) =>{
    console.log(data);                      //Buffer data 
    //  console.log(data.toString());          // String data
});