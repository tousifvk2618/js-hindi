const mySym = Symbol("key1")

const JSUser = {
    mySym : "value1",
    [mySym] : "keyvalue1"
}

// console.log(typeof JSUser.mySym)
// console.log(JSUser)

JSUser.greeting = function() {
    console.log('Inside! Hello, you beauty!!')
    return 177
}

console.log("First to be printed")
console.log(JSUser.greeting)
console.log()
console.log(`Second! ${JSUser.greeting}`)
console.log()
console.log(`Third --> ${JSUser.greeting()}`)
console.log()
console.log(JSUser.greeting())