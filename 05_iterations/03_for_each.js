arr = ["a", "e", "i", "o", "u"]

arr.forEach( (item) => {
    // console.log(item)
} );
// for-each needs function to access elements/items of array. 
// Similar to for-of loop where we print values of array (array items) and not INdexes.


const mapu = new Map()
mapu.set("js", "javascript")
mapu.set("py", "python")

mapu.forEach( (item) => {
    // console.log(item)
} )
// So, just like for-of loop, where we went thru each entry as an array, now we can print 'values' of array, that is not indexes, but array items.
// ["javascript", "python"] ---> array items


//******* To get index, use in-built option 'index' in the parameter of array function.
mapu.forEach( (item, index) => {
    // console.log(item, index)
} )


const myObj = {
    "js" : "javascript", 
    "py" : "python"
}

// myObj.forEach( (entry) => {
//     console.log(entry)
// } );
// Same like for-of, not possible to traverse thru objects using for each.




const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js"
    },
    {
        languageName : "java",
        languageFileName : "java"
    },
    {
        languageName : "python",
        languageFileName : "py"
    },
    "Hello Hi, Bye Bye!!!",
    1826
]

myCoding.forEach( (item) => {
    console.log(item)
    // console.log(typeof item)
    console.log(item.languageFileName)
    console.log()
} )