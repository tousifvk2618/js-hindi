arr = ["a", "e", "i", "o", "u"]

for (const val of arr) {
    console.log(val)
}


const mapu = new Map()
mapu.set("js", "javascript")
mapu.set("py", "python")

for (const element of mapu) {
    console.log(element)
    console.log(element[0])
    console.log()
}


const myObj = {
    "js" : "javascript", 
    "py" : "python"
}

for (const element of myObj) {
    console.log(element)
}