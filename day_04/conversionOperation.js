// Suppose you have a form in the footer of the website, and You want to extract the data your user gave you through the form,
//  how can you get the data and save it in your server?
// We will need data conversion method

let userName = "Mahi Hashmi"
let email = "mahi.hashmi@zindex.cloud"
let isSubscribed = 0
let cellNumber = 88012345678
let uniqueId = "776554"

let stringUsername = String(userName)
let stringEmail = String(email)
let booleanSubscribe = Boolean(isSubscribed)
let stringCellNumber = String(cellNumber)
let numberUniqueId = Number(uniqueId)

console.log(stringUsername)
console.log(stringEmail)
console.log(stringCellNumber)
console.log(booleanSubscribe)
console.log(numberUniqueId)
console.log(typeof stringUsername)
console.log(typeof stringEmail)
console.log(typeof stringCellNumber)
console.log(typeof booleanSubscribe)
console.log(typeof numberUniqueId)

//some inverstigations

// let myAge = 19;
// let booleanMyAge = Boolean(myAge)
// console.log(booleanMyAge) //true 
// console.log(typeof booleanMyAge) //boolean

