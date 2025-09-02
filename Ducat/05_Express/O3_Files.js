const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req,res)=>{
    const { method, body, protocol, params, ip } = req;
    console.log(req);
    res.send({method, body, params, protocol , ip });
});

app.listen(5000, ()=>{
    console.log(`server listing at http://localhost:5000`);
});
