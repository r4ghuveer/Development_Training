//1st) Initiate mongodb in a Admin windows powerShell then in another Admin windows powerShell write mongo to connect to database;
//2nd) show dbs, use (database name), show collections(it can be said tables);
//mongo doesn't follow schema so you can add any attribute , it is not neccessary that you should match the number or attributes.


//inserting data or document in database using mongodb
//use 1stDB

db.item.find({age: 21}); //This querry will give all the objects that has age = 21