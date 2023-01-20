const fs=require("fs");
let text = fs.readFileSync("G:/Web_dev/Javascript/Files/readme.txt","utf-8");
text=text.replace('below','beneath');
console.log(text);
console.log("**********************************************")
//Creating a new file
fs.writeFileSync("G:/Web_dev/Javascript/Files/File1.txt",text);
console.log("Creating file..");

let File1=fs.readFileSync("G:/Web_dev/Javascript/Files/File1.txt","utf-8");
console.log(File1);