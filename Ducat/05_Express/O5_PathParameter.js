const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/courses/:coursename/:topicname', (req, res)=>{
    res.send(`Course name is ${req.params.coursename} and topic name is ${req.params.topicname}`);
});

// It will work whne user enter unwanted route
app.all('/{*splat}', (req, res) => {
  res.status(404).send("<h4>Page is not valid</h4>");
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
}
);
