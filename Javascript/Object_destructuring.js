const obj={
    name: "sam",
    age: 20,
    gender: "male"
}

const { name,gender }=obj; // this way we distructured the object and used only fields we want to use
console.log(name,gender);   // this method can also be used in functions where we pass objects as arguments

// we can use another method to destructure an object i.e. => 
// Array destructuring
const array1=["raghuveer","male"];
const [myname, mygender]=array1;
console.log(myname);