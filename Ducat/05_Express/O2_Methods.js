const express = require('express');
const app = express();

app.use(express.json());

app.get('/' ,(req, res)=>{
        res.send('<H1> Home Page </H1>');
});

app.post('/login' , (req, res)=>{
    const {email, password} = req.body;
    res.send({email, password});
});

app.listen(5000, ()=>{
    console.log(`server listing at http://localhost:5000`);
});

