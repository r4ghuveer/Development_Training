//1st) Initiate mongodb in a Admin windows powerShell then in another Admin windows powerShell write mongo to connect to database;
//2nd) show dbs, use (database name), show collections(it can be said tables);
//mongo doesn't follow schema so you can add any attribute , it is not neccessary that you should match the number or attributes.


//inserting data or document in database using mongodb

db.item.insertOne({name: 'raghuveer',
    age: 20,
    gender: 'male'
})

//For inserting many document at same time

db.item.insertMany([{name: 'Sammer',age: 23,gender: 'male'},{name: 'Rahul',age: 21,gender: 'male'},{name: 'Esdeath',age: 21,gender: 'female'}])

//deleting
db.item.deleteOne({name:'raghuveer'})//if documents have same attribute it will delete the 1st one.

//updating
//update Esdeath age to 20 <3
db.item.updateOne({name:"Esdeath"},{$set:{age:20}})
//updateMany to update all with name : "Esdeath"
db.item.updateMany({name:"Esdeath"},{$set:{age:20}})