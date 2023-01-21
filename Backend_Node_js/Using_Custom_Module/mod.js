let sum = 0;
function average(arr) {
    arr.forEach(element => {
       sum += element; 

    });
    return sum/arr.length;

}
let sum1=0;
function addition(arr){
    arr.forEach(element=>{
        sum1+=element;
    })
    return sum1;
};
function N(){
    let a = "r4ghuveer"
    return(a);
}
// module.exports={
//     avg : average,
//     S : addition
// };
//module.exports itself is an object so we can do this also : - module.exports.Name="raghuveer"; then call Name at the receiving end

module.exports={
    myname : N,
    avg : average,
    S : addition
};