const express = require('express');
const cors = require('cors');
const { use } = require('react');
const app = express();

var whitelist = ['https://www.w3schools.com', 'https://www.tutorialspoint.com'];

var corsOptions = {
    origin : function (origin, callback) {
        if(whitelist.includes(origin)){
            callback(null, true)
        }else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}
app.use(cors(corsOptions));

app.get('/emps', (req, res)=>{
    const users = [
        {name: 'Farhan', add: 'bang', age: 25},
        {name: 'hussain', add: 'hyd', age: 22},
    ]
    res.status(200).json(users);
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
});