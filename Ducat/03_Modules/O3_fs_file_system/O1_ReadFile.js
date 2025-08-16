const { error } = require('console')
const fs = require('fs')

// Error first callbak
fs.readFile('C:/Users/HP/New folder/Nodejs/Ducat/04_Modules/O3_fs_file_system/File1.txt', (err, data) =>{
    console.log(data);                      //Buffer data 
    //  console.log(data.toString());          // String data
});