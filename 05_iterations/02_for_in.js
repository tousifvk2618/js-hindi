arr = ["a", "e", "i", "o", "u"]

for (const index in arr) {
    // console.log(index)
}
// for-in prints index whereas for-of prints values of the array

const mapu = new Map()
mapu.set("js", "javascript")
mapu.set("py", "python")

// for (const index in mapu) {
//     // console.log(index)
// }
// General Trivia: "Map is not iterable." Hence, in for-in loop, we cant get INdexes of map.


const myObj = {
    "js" : "javascript", 
    "py" : "python"
}

for (const index in myObj) {
    console.log(index)
    console.log(myObj[index])
    console.log()
}
//Here, in for-in loop, we can get INdexes of objects.