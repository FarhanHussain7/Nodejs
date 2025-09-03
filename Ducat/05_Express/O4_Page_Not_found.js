const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res)=>{
    res.send("<h4>Home page</h4>");
});

app.get('/carrer', (req,res)=>{
    res.send("<h4> About us Page</h4>");
});

app.get('/about', (req, res)=>{
    res.send("<h4>About us page</h4>");
});

// It will work whne user enter unwanted route
app.all('/{*splat}', (req, res) => {
    res.send("<h4>Page is not valid</h4>");
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
}
);
//22-feb