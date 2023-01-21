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
}
module.exports={
    avg : average,
    S : addition
};