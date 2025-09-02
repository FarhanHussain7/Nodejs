const fs = require('fs');

fs.appendFile('./Nodejs/Ducat/04_Modules/O3_fs_file_system/File1.txt', 'This is file-2 content \n', (err, data)=>{
    if (err) throw err;
        console.log('data Written sucessfully ')

})