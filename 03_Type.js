const http = require('http');

const server = http.createServer((req, res )=> {
    const htmlContent = `
    <!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
    <link rel="stylesheet" href="/BOOTSTRAP/node_modules/bootstrap-icons/font/bootstrap-icons.css"> 
</head>
<style>
    nav div{border: 2px solid black;
        color: wheat;
        background-color: red;
         width: 100px;
          margin: 10px;
        border-radius: 5px;
        padding: 10px;
        transition: 2s;
    }
    nav div:hover{
        background-color: yellow;
        color: black;
    }
    nav {
        display: flex;
    }
</style>
<body>
    <nav>
        <div>
            <span id="icon" class="bi bi-briefcase-fill"></span><span>notification</span>
        </div>
        <div>
            <span id="icon"  class="bi bi-bookmark-plus-fill"></span><span>save</span>
        </div>
        <div>
            <span id="icon"  class="bi bi-alarm"></span><span>alarm</span>
        </div>
    </nav>
</body>
</html>
`;

res.writeHead(200,{'content-type': 'text/html'});
res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`server runing on http://localhost:${PORT}`)
});