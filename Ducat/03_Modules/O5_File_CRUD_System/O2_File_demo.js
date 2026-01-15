const fs = require('fs');

fs.readFile('./Nodejs/Ducat/03_Modules/O5_File_CRUD_System/File1.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err, " yes it is err")
    }

    console.log(data , ":--- ths is data");
});

