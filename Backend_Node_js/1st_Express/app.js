const express = require('express');
const app = express();
const port = 80;
app.get('/',(req,res) =>{
    res.send("Home page");

});
app.get('/about',(req,res) =>{ //for get request  
    res.send("About page");    //sends response to get request

});

app.post('/',(req,res)=>{
    res.send("post !!");
});
//for including status of the request and response we include status
app.get('/help',(req,res)=>{        //since there is no help page
    res.status(404).send("Maro mujhe");  
});

app.listen(port,()=>{
    console.log(`The application started on port ${port}`);
})