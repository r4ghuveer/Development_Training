const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1:27017/DB')
var db=mongoose.connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
    console.log("We are connected bro/sis..");
}) 
var kittenSchema = new mongoose.Schema({ //defining a schema for our database
    name : String
});
var Kitten= mongoose.model('My_cat',kittenSchema); //creating model so that we can assecc object for using CURD functions on our database


Kitten.find(function(err,obj){
    if(err) console.log(err);
    console.log(obj); // THis will show use all the documents in "My_cat" collection who's name = snow;
})