const express = require('express');
const app = express();

const myMiddleware = function(req, res, next){
    console.log("Middleware called .............");
    console.log(req.url, req.method);
    next();
};

app.use(myMiddleware);

app.get('/', (req,res)=>{
    res.send("<h1>Home Page</h1>");
});

app.get('/about',myMiddleware, (req, res)=>{
    res.send('<h1>About us Page</h1>');
});
app.get('/carrer', (req, res)=>{
    res.send('<h1>Carrer Page</h1>');
});

app.get('/{*splat}', (req, res)=>{
    res.send('<h1>No Page found </h1>');
});
app.listen(5000, ()=>{
    console.log(`server listing at http://localhost:5000`);
});