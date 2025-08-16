const fs = require('fs');

fs.unlink('./Nodejs/Ducat/04_Modules/O3_fs_file_system/abc.txt', (err)=> { 
    if (err) throw err;
        console.log('File deleted');
});