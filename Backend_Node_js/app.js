const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }
  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => { // node js stream the data in chunk by chunk form, here on is a event listener for any incoming data
      console.log(chunk);
      body.push(chunk);
    });
    req.on('end', () => {// when the chunk is received their is a buffer in which this on listener activates
      const parsedBody = Buffer.concat(body).toString(); // That buffer is used to concatinate the data received in chunk format
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt', message); // view message.txt created 
    });
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();
});

server.listen(3000);
