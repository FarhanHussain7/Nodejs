const express = require('express');
const app = express();

app.use(express.json());

app.get('/temp', async (req,res)=>{
    const {city} = req.query;
    const myUrl = ``;
    const response = await axios.get(`https://google.temp`);
    res.send(response.data);
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
}
);
