const obj={
    name: "sam",
    age: 20,
    gender: "male"
}

const { name,gender }=obj; // this way we distructured the object and used only fields we want to use
console.log(name,gender);   // this method can also be used in functions where we pass objects as arguments