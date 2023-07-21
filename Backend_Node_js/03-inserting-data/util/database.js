const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://r4ghuveer:CgXLUL3zVzE7TEo9@cluster0.orx5fjp.mongodb.net/?retryWrites=true&w=majority')
    .then(client =>{
        console.log('connected');
        callback(client)
    })
    .catch(err=>{
        console.log(err);
        throw err;

    });
}

module.exports=mongoConnect;
