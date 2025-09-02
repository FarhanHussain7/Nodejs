const fs = require('fs');

fs.readFile('./Nodejs/Ducat/04_Modules/O3_fs_file_system/File1.txt', 'utf-8', (err, data)=>{
    if(err){
        console.log(err, " yes it is err")
    }

    console.log(data , ":--- ths is data");
});

