const express = require('express');
const path= require('path');
const app = express();
const port = 80;
//for serving static files EXPRESS SPECEFIC STUFF
app.use('/static',express.static('static')) //now we can use /static url to access code in static folder.

// Set the template engine as pug PUG SPECIFIC STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))// Set the views directory


//END POINTS
//our pug demo end point
app.get('/demo',(req,res) =>{ 
    res.status(200).render('demo',{title:'This is title',message:'This is the message, How are you doing sir!'});   

});
app.get('/',(req,res) =>{ 
    res.status(200).render('index.pug',{title:'This is title',message:'This is the message, How are you doing sir!'});   

});
//creating object to send to index.pug
const obj = {'h1':'PUG XP','heading':'PUG using an plain HTML','content':'Hello guys my name is r4ghuveer and this is a paragraph......'}
app.get('/index',(req,res)=>{
    res.status(200).render('index.pug',obj);
})

app.get('/',(req,res) =>{
    res.send("Home page");

});
app.get('/about',(req,res) =>{ //for get request  
    res.send("About page");    //sends response to get request

});


//for including status of the request and response we include status
app.get('/help',(req,res)=>{        //since there is no help page
    res.status(404).send("Maro mujhe");  
});

app.listen(port,()=>{
    console.log(`The application started on port ${port}`);
})