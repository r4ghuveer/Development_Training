const names = ["ram","sam"];

// names=['sohan'];// this will give error as it is trying to assign a array to a constant variable(which is not allowed)
// console.log(names);

names.push("dam");// but this will work since we are just changing what the constant variable is pointing to, not the variable itself. 
console.log(names);