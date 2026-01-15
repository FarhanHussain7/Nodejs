const fs = require('fs');

fs.appendFile('./Nodejs/Ducat/03_Modules/O5_File_CRUD_System/File1.txt', 'This is file-2 content \n', (err, data)=>{
    if (err) throw err;
        console.log('data Written sucessfully ')
})