const express = require('express')
const app = express();

app.get('/', (req, res ) =>{
    res.send('<h1 style:"color: blue">Welocme to express page 1</h1>');
    res.closed;
});

app.get('/', (req, res ) =>{
    res.send('<h1 style:"color: blue">Welocme to express page 1</h1>');
    res.closed;
});

app.get('/', (req, res ) =>{
    res.send('<h1>Welocme to express page 1</h1>');
    res.closed;
});

app.get('/about', (req, res ) =>{
    res.send('<h1>Welocme to about page 2</h1>');
    res.closed;
});

app.get('/carrer', (req, res ) =>{
    res.send('<h1>Welocme to carrer page 3</h1>');
    res.closed;
});
 
app.listen(5000, ()=>{
    console.log('server runing at http://localhost:5000');
});