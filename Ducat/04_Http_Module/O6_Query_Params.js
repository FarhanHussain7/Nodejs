const http = require('http');
const url = require('url');

const server = http.createServer((req, res)=>{
    const urlobj = url.parse(req.url, true);
    const queryParams = urlobj.query;
    const { name, add } = queryParams;
    let msg ='';
    if(name && add ){
        msg = `${name} is from ${add}`;
    }else{
        msg='Bad Request';
    }

    res.write(msg);
    res.end();
});

server.listen(5000, (req, res) =>{
    console.log(`server is running on the http://localhost:5000/`);
});
