const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/todos', (req, res)=>{
    res.status(200).json(TodoArr);
});

app.get('/todos/:id', (req,res)=>{
    const todoObj = TodoArr.find(todo=> todo.id === +req.params.id);
    res.status(200).json(todoObj);
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
});