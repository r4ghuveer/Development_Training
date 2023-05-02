const express = require('express');
const fs=require('fs');
const path= require('path');
const app = express(); // this returns a function to app is a object of funtion.
const bodyparser = require('body-parser');
const mongoose=require('mongoose')
mongoose.set('strictQuery', true);
const port = process.env.PORT || 80;  //env stands for environment, this will set the port according if the website is hosted on a domain || if not it will take the 80 port.. to set the environment variable, type in terminal : - set PORT=5000
mongoose.connect('mongodb://127.0.0.1:27017/login_details')

/*MIDDLE WARE
app.use((req,res,next)=>{
    console.log('In the middleware');
    next();  //Allows the request to continue in the next middleware
})
app.use((req,res,next)=>{
    console.log('Another middleware');
})
*/

//Creating schema
let detail = new mongoose.Schema({
    name : String,
    age : String,
    gender : String,
    address : String,
    more : String
})

//Creating model

let data=new mongoose.model('first_backend_entries',detail)



//for serving static files EXPRESS SPECEFIC STUFF
app.use('/static',express.static('static')) //now we can use /static url to access code in static folder.
app.use(express.urlencoded());

// Set the template engine as pug PUG SPECIFIC STUFF
app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))// Set the views directory


//END POINTS
//our pug demo end point
app.get('/demo',(req,res) =>{ 
    res.status(200).render('demo',{title:'This is title',message:'This is the message, How are you doing sir!'});   

});
//creating object to send to index.pug
const obj = {'h1':'PUG XP','heading':'PUG using an plain HTML','content':'Hello guys my name is r4ghuveer and this is a paragraph......'};
app.get('/index',(req,res)=>{
    res.status(200).render('index.pug',obj);
})
app.post('/index',(req,res) =>{
    let mydata = new data(req.body);
    mydata.save()
        .then(()=>{
            console.log('Data added to database login_details and collection 1st_backend_entries')
        }).catch(()=>{
            console.log('some error occurred!')
        })
    
});

app.get('/about',(req,res) =>{ //for get request  
    res.send("About page");    //sends response to get request

});


//for including status of the request and response we include status
app.get('/help',(req,res)=>{        //since there is no help page
    res.status(404).send("Maro mujhe");  
});


//POST 
// app.post('/',(req,res)=>{
//     let name=(req.body.name);
//     let age=(req.body.age);
//     let gender=(req.body.gender);
//     let address=(req.body.address);
//     let more=(req.body.more);
//     let output_to_write=`The name of client is ${name}, ${age} years old, ${gender} gender, address is ${address}; and more about him / her ${more}`;
//     fs.writeFileSync('output.txt',output_to_write)
//     const msg={'message':'Your form has been submited'}
//     res.status(200).render('index.pug',msg);
// })

app.listen(port,()=>{
    console.log(`The application started on port ${port}`);
})