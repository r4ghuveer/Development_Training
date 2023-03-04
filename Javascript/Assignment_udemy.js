const http = require ( 'http' );
const server = http.createServer((req,res)=>{
    const url=req.url;
    const method = req.method;
    if(url=="/"){
        res.write('<html><body><p>Hello User</p><form method="POST" action="/create-user"><input type="text" name="message"><button type="submit">Create User!</button></form></body></html>');
        res.end();
    }
    if(url=="/user"){
        res.write('<html><body><li><ul>Raghuveer</ul><ul>Awesome</ul></li></body></html>');
        res.end();
    }
    if(url=="/create-user" && method=="POST"){
        const name = []
        req.on('data',(username)=>{
            name.push(username);
        });
        req.on('end',()=>{
            const parsedBody=Buffer.concat(name).toString();
            const messages=parsedBody.split('=')[1];
            res.write(`<html><body><p>${messages}</p></body></html>`);
            res.end();
        });
        
    }
});

server.listen(3000);