//syncronous or blocking : - Here the code executes line by line
//Asyncronous or non-blocking : - Here if the code has some task that takes time to run and stats processing in the background, the code below it starts executing (instead of waiting for that backgroud process complete)
// An example;

let fs=require('fs');
fs.readFile("G:/Web_dev/Javascript/Files/File1.txt","utf-8",(err,data)=>{
    console.log(data); //This is the data inside File1.txt which will work in background
})
console.log("Message!!"); //This is a dummy message to check if it executes before readFile or after readFile

console.log("*********************************")
console.log("*********************************")
console.log("*********************************")
// The output is 
/*Message!!
And I'll be gone gone tonight
The ground beneath my feet is buring bright
The way that i'll be holding on to tight
With nothing in between*/    

//as we can see Message!! comes before the file1.txt's content