const names = ["ram","sam"];

// names=['sohan'];// this will give error as it is trying to assign a array to a constant variable(which is not allowed)
// console.log(names);

names.push("dam");// but this will work since we are just changing what the constant variable is pointing to, not the variable itself. 
console.log(names);


//For copying a object or a array

const obj={
    name:"raghuveer",
    age: 20,
    sex: "male"
}

const new_obj= {...obj}; // here we use the spread operator(...) to pull out the elements inside obj to new_obj

const new_obj2={...obj}; // but if we don't do that it will create
new_obj2.gender="male";
console.log(obj);