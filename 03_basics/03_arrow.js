// console.log(this) // ---> {}

function addone(num1){
    username = "one" //When you assign username = "two"; without declaring it using let, const, or var, JavaScript implicitly creates a global variable named username.

    console.log(this.username) // refers to
}
// addone(3)


const addtwo = function(num1){
    var username = "two"  //When you declare username using let (or const), it becomes a block-scoped variable and is not added to the global object.
    console.log(this.username)
}

// addtwo(4)



const addthree = () => {
    const username = "three"
    console.log(this) // ---> {} becoz of arrow function
    console.log(this.username)
}

addthree()



const arrow = (num1,num2) => {
    return num1+num2            // becoz we used {} after arrow =>, we need return statement explicitly
}

const arrow = (num1,num2) => (num1+num2) // since we didnt use {} after arrow, no need of return statement. We can use () to club our stuff


const returningObject = () => ({username: "hi ji"})