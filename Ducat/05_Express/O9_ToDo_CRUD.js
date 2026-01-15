const express = require('express');
const app = express();

app.use(express.json());

const TodoArr = [
    { id:1, title:'ToDo 1', desc:'This is Todo 1', completed: true},
    { id:2, title:'ToDo 2', desc:'This is Todo 2', completed: false},
    { id:3, title:'ToDo 3', desc:'This is Todo 3', completed: true},
    { id:4, title:'ToDo 4', desc:'This is Todo 4', completed: true},
]

app.get('/', (req, res)=>{
    res.send("Home page ");
});

app.get('/todos', (req, res)=>{
    res.status(200).json(TodoArr);
});

app.get('/todos/:id', (req,res)=>{
    const todoObj = TodoArr.find(todo=> todo.id === +req.params.id);
    res.status(200).json(todoObj);
});

app.post('/todos', (req, res)=>{
    TodoArr.push(req.body);
    res.status(201).json('to do data added successfully');
});

// It will update all data 
app.put('/todos/:id', (req,res)=>{
    const todoObj = TodoArr.find(todo=> todo.id === +req.params.id);
    if(todoObj){
        const {id, title, desc, completed } = req.body;
        todoObj.id = id;
        todoObj.title = title;
        todoObj.desc = desc;
        todoObj.completed = completed;
        res.status(200).json({msg: 'upadted successfully'});
    }else {
        res.send(404).json({msg: 'To Do Not found'});
    }
});

// it will update only single object 
app.patch('/todos/:id', (req,res)=>{
    const todoObj = TodoArr.find(todo=> todo.id === +req.params.id);
    if(todoObj){
        const allKeys = Object.keys(req.body);
        for(key of allKeys){
            todoObj[key] = req.body[key];
        }
           res.status(200).json({msg: 'upadted successfully'});
    }else {
        res.send(404).json({msg: 'To Do Not found'});
    }
    });

app.delete('/todos/:id', (req,res)=>{
    const todoIndex = TodoArr.findIndex(todo=> todo.id === +req.params.id);
    if(todoIndex){
        TodoArr.splice(todoIndex, 1);
           res.status(200).json({msg: 'Deleted successfully'});
    }else {
        res.send(404).json({msg: 'To Do Not found'});
    }
    });

// It will work whne user enter unwanted route
app.all('/{*splat}', (req, res) => {
  res.status(404).send("<h4>Page is not valid</h4>");
});

app.listen(5000, ()=>{
    console.log('server listing at http://localhost:5000');
}
);
