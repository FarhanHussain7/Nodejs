const fs = require('fs');

const data1 = fs.readFileSync('./Nodejs/Ducat/04_Modules/O3_fs_file_system/File1.txt', 'utf-8');
const data2 = fs.readFileSync('./Nodejs/Ducat/04_Modules/O3_fs_file_system/File2.txt', 'utf-8');
fs.writeFileSync('./Nodejs/Ducat/03_Modules/O5_File_CRUD_System/File4.txt', `${data1} ${data2}`);
console.log("Done");

