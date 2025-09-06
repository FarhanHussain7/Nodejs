const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    res.send(`
        <p>please check the below link to download a file</p> <br/>
        <a href="http://localhost:5000/download" 
           style="display:inline-block; width:200px; height:50px; border:2px solid #007BFF; 
                  text-align:center; line-height:50px; text-decoration:none; color:#007BFF; 
                  font-weight:bold; border-radius:8px;"  >
            download node image
        </a>
        <br/>
        <br/>
        <a href="http://localhost:5000/openFile" 
           style="display:inline-block; width:200px; height:50px; border:2px solid #007BFF; 
                  text-align:center; line-height:50px; text-decoration:none; color:#007BFF; 
                  font-weight:bold; border-radius:8px;">
           open node image
        </a>
    `);
});

app.get('/openFile', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './jacket01.jpg'));
});

app.get('/download', (req, res)=>{
    res.download(path.resolve(__dirname, './jacket01.jpg'));
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
});
