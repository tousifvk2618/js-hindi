console.log(addone(5))
function addone(num){
    return num+1
}


// console.log(addtwo(5))   --- X
const res = function addtwo(num){
    return num+2
}

// console.log(addtwo(5))   --- X
// console.log(res(5))      --- right



// console.log(addthree(5))   //--- X
const addthree = function(num){
    return num+3
}
console.log(addthree(5))   //--- right