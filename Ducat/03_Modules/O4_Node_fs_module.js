const fs = require('fs');

fs.unlink('./File.txt', (err) => {
    if (err) throw err;
    console.log('file deleted');
});