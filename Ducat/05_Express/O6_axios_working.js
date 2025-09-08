const express = require('express');
const app = express();

app.use(express.json());

app.get('/users/:userName', async (req,res)=>{
    const userName = req.params.userName;
    const response = await axios.get(`https://api.github/users/${userName}`);
    res.send(response.data);
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
}
);
