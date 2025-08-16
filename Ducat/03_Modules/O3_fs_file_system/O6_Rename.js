const fs = require('fs');

fs.rename('./Nodejs/Ducat/04_Modules/O3_fs_file_system/abc.txt','./Nodejs/Ducat/04_Modules/O3_fs_file_system/xyz.txt', (err) =>{
    if (err) throw err;
        console.log('File Name changed');
});