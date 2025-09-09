const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const TodoArr = [
    { id:1, title:'ToDo 1', desc:'This is Todo 1', completed: true},
    { id:2, title:'ToDo 2', desc:'This is Todo 2', completed: false},
    { id:3, title:'ToDo 3', desc:'This is Todo 3', completed: true},
    { id:4, title:'ToDo 4', desc:'This is Todo 4', completed: true},
]

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