const http = require('http');
const fs = require ('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('Home.html');
const about = fs.readFileSync('About.html')
const server = http.createServer((req,res)=>{
    let url=req.url;
    if(url == '/Home'){
        res.end(home);
    }
    else if(url == '/About'){
        res.end(about)
    }
    
    console.log(req.url);
    res.statusCode=200;
    res.setHeader('Content-type','text/html');
    res.end(home);
 })
server.listen(port, hostname,()=>{
    console.log(`Server running at http://${hostname}:${port}/`);
})