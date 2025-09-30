const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');
app.use(fileUpload());

app.post('/upload', (req, res) => {
    let sampleFile;
    let uploadPath;
    console.log(req.files);

    if(!req.files || Object.keys(req.files).length === 0) {
        console.log('No Files')
        return res.status(400).send('No Files Choosen');
    }else{
        sampleFile = req.files.sampleFile;
        uploadPath = __dirname+'/assets/'+sampleFile.name;
        
        // use.mv() method to place the file somewhere in server 
        sampleFile.mv(uploadPath, (err)=>{
            if(err) {
                return res.status(500).send(err)
            }
            res.send(`${sampleFile.name} Uploaded Successfully`)
        })
    }
});

app.listen(5000, () => (
    console.log(`Server started at http://localhost:5000`)
));
