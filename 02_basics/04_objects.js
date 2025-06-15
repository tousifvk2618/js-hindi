const tinderUser = {}

tinderUser.id = 1
tinderUser.email = "h@gmail.com"

regularUser = {

    profile: {
        fullname: "Md T",
        username: "tousifvk2618"
    }
}


// console.log({tinderUser, regularUser})
// console.log({...tinderUser, ...regularUser})
// console.log(Object.assign(tinderUser, regularUser))
// console.log(Object.assign({}, tinderUser, regularUser))


// Destructuring of objects //


// console.log(regularUser.profile.fullname)

// const {fullname} = regularUser
// console.log(fullname) prints undefined. ---> The issue lies in how you are attempting to destructure the fullname key from the regularUser object. The fullname key is not a direct property of the regularUser object—it is nested inside the profile object.

// const {profile: {fullname}} = regularUser
// console.log(fullname)


const {profile: {fullname : asNewName}} = regularUser
// console.log(fullname) ---> ReferenceError
console.log(asNewName)




