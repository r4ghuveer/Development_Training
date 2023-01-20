// console.log("Hello world!");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Events</title>
  </head>
  <style>
      #btn{
          padding: 10px 14px;
          background-color: pink;
          border: 2px solid black;
          color: dark pink;
          font-weight: bold ;
          border-radius: 8px;
          cursor:pointer;
      }
      #para{
          color:lightgreen;
      }
  </style>
  <body>
      <div class="container">
          <h1>This is the heading </h1>
          <p id="para" onmouseover="hover()" onmouseout="hover()">
  
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ab animi nostrum quam hic dolorem officia consectetur, sunt corrupti maiores sed minus doloremque ! Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere quia quasi eveniet sint odio veritatis, animi suscipit necessitatibus, tempora delectus quis molestiae laudantium ipsum? Fugit, doloremque minus? Molestias explicabo eveniet architecto magnam sunt maxime eos deserunt ut voluptas nulla blanditiis incidunt adipisci consequuntur mollitia, natus officiis omnis ducimus libero corporis dolorum! Nobis, obcaecati. Quis at alias rem, deserunt quia expedita ut ducimus nemo dolores temporibus corrupti optio consequatur vel inventore asperiores accusantium eligendi quasi ad non! Quibusdam, enim. Iure, libero neque doloribus minus commodi corrupti iusto blanditiis sequi hic repudiandae delectus provident enim molestiae distinctio tempore voluptate alias quisquam.
          </p>
      </div>
      <button id="btn" onclick="hide()"> Click me !  XP</button>
      <script>
          //Browser events: = 
          //1)click
          // 2)contextmenu
          // 3)mouseover / mouseout
          // 4)mousedown / mouseup
          // 5)mousemove
  
          // submit
          // focus
  
          // DOMcontentLoaded
  
          // transitioned
          
  
          let obj1=document.getElementById("para");
          function hover(){
              if(obj1.style.color!='black'){
                  obj1.style.color="black";
              }
              else{
                  obj1.style.color="lightgreen";
              }
          }
          
          obj1.addEventListener('mousedown',function run(){
              obj1.style.color="pink";
          });
  
  
          function hide(){
              let A=document.getElementById("btn");
              let B=document.getElementById('para');
              if(B.style.display!= "none"){
                  B.style.display="none";
              }
              else{
                  B.style.display='block';
              }
          }
      </script>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});