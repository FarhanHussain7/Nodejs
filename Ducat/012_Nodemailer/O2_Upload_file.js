const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;
    console.log(req.files);

    
})
