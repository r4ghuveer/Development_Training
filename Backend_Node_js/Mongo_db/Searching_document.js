//1st) Initiate mongodb in a Admin windows powerShell then in another Admin windows powerShell write mongo to connect to database;
//2nd) show dbs, use (database name), show collections(it can be said tables);
//mongo doesn't follow schema so you can add any attribute , it is not neccessary that you should match the number or attributes.


//inserting data or document in database using mongodb
//use 1stDB

db.item.find({age: 21}); //This querry will return all the objects that has age = 21


//gt : - greater than 
//lt : - lesser than.


db.item.find({age :{$gte: 20}})// Returns all objects that has age >=20

db.item.find({age :{$gt: 20}})// Returns all objects that has age >20 ##not equal to 20.  "e" is removed.

db.item.find({age :{$lt: 20}})// Returns all objects that has age less than <20 #&#not equal to 20.  "e" is removed.

//AND OPERATOR : - i.e. Age should be greater than 20 and gender should be male both should satisfy.
//can use multiple filters
db.item.find({age :{$gt: 20}, gender:'male'})

//OR OPERATOR : - if satify any of the filter than true;
db.item.find({$or : [{age :{$gt: 20}}, {gender:'male'}]})
//output : { "_id" : ObjectId("63d30c9decee16d584e1b73c"), "name" : "Esdeath", "age" : 21, "gender" : "female" }

//if we want to only see one attribute instead of seeing all other attribute we can : - 
db.item.find({$or : [{age :{$gt: 20}}, {gender:'male'}]},{name:1}) //Here i want to see name only, so name:1 (name : true)
//{ "_id" : ObjectId("63d30c9decee16d584e1b73c"), "name" : "Esdeath" }

//similarly
db.item.find({$or : [{age :{$gt: 20}}, {gender:'male'}]},{name:1,age:1})// This will show age and name only

"GG"