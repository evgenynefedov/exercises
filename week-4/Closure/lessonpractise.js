
const closureTest = function(){
    let y = 0;

    return function(param){
        let result = y + param;
        y = param
        return result; 
    }
}
const add = closureTest();

console.log(add(3));  //3
console.log(add(1));  //4
console.log(add(2));  //3
console.log(add(2));  //4
console.log(add(8));  //10