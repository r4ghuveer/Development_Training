const http = require('http');
const fs = require('fs');
const filecontent = fs.readFileSync('G:\\Web_dev\\Backend_Node_js\\Events.html');
const server = http.createServer((req,res)=>{
    const url=req.url;
    if(url==='/'){
        res.write('<html>')
        res.write('<body>Hello everyone!<form method="POST" action="/message"><input type="text" name="message"><button type="submit">Click!</button></form></body>')//Response body; Check these on network tab of browers
        res.write('</html>')
        // res.end(filecontent); // When we end , this means response have been sent no more response after it
        return res.end();
    }
    res.writeHead(200,{'Content-type':'text/html'}); // This is the header which goes as a response
    res.write('<html>')
    res.write('<body>Hello everyone!</body>');
    res.write('</html>');
    // res.end(filecontent); // When we end , this means response have been sent no more response after it
     res.end();

})
const port=80;
server.listen(port,'127.0.0.1',()=>{
    console.log(`Listening on port ${port}`);
}); 