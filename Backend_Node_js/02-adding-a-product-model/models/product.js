const fs = require('fs');
const mainModuleFilename = require.main.filename;
const path = require ('path');
module.exports = class Product {
    constructor(t) {
        this.title = t;
    }

    save() {
         const p = path.join(path.dirname(mainModuleFilename),'data','products.json');
        fs.readFile(p,(err,fileContent) =>{
            let products=[];
            if(!err){
                products=JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),(err)=>{
                console.log(err);
            });
        });
        fs.readFile(p,(err,fileContent)=>{
            console.log(fileContent);
        })
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(mainModuleFilename),'data','products.json');
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                cb([]);
            }
            cb(JSON.parse(fileContent));
        })
    }
}