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

kittenSchema.methods.speak=function(){ // we can also assign functions to that schema
    var greeting =  "Meow name is " + this.name+" nya";
    console.log(greeting);
}

var Kitten= mongoose.model('My_cat',kittenSchema); // convert defined schema into model , so that it can be used as object.
                                                    // Here My_cat will be the collection's name.

var mykitten = new Kitten({
    name : "snow"
});
var mykitten2 = new Kitten({// mykitten2 following the model schema (having name) 
    name : "Oscar"
});
console.log(mykitten.name);
mykitten.speak();

//for saving it as a document in database;

mykitten.save(function(err,obj){ // Here obj is mykitten's object that is taken as argument when we call save method.
    if(err) return console.log(err);
    obj.speak();
})

//Saving mykitten2 document in My_cat collection
mykitten2.save(function(err,obj){ // Here obj is mykitten's object that is taken as argument when we call save method.
    if(err) return console.log(err);
    obj.speak();//These functions right now are just for showing something's happening
})