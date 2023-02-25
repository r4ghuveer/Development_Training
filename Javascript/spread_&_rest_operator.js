const names = ["ram","sam"];

// names=['sohan'];// this will give error as it is trying to assign a array to a constant variable(which is not allowed)
// console.log(names);

names.push("dam");// but this will work since we are just changing what the constant variable is pointing to, not the variable itself. 
console.log(names);

// Spread operator
//For copying a object or a array

const obj={
    name:"raghuveer",
    age: 20,
    sex: "male"
}

const new_obj= {...obj}; // here we use the spread operator(...) to pull out the elements inside obj to new_obj

const new_obj2={obj}; // but if we don't do that it will create a nested object inside it

const new_obj3=obj; // This is wrong because any changes to new_obj3 will affect obj(as it passes its reference) which is not ideal

console.log(new_obj);

// Rest operator

const myfun = (arg1,arg2,arg3) =>{// Here it will only take 3 arguments
    return [arg1,arg2,arg3]
}
console.log(myfun(1,2,3,4));

//But by using spread operator

const myfun2 = (...args)=>{ // Rest operator(...) will take any number of args
    return args;
}
console.log(myfun2(1,2,3,4,5,6,7,8));