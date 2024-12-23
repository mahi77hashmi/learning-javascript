//This note is about data-type in JavaScript

// there are 8 types of data types in JS, they are:

let fullName = "Mahi Hashmi" //string
let age = 19 //number
let isLoggedIn = true //boolean
let creditCardInfo = null //null & Object , [null means no value, not "0" and not "undefined either"]
let maritalStatus //undefined

console.table(typeof fullName)
console.table(typeof age)
console.table(typeof isLoggedIn)
console.table(typeof creditCardInfo)
console.table(typeof maritalStatus)

//Not important for now
// bigInt(big math calculatons), Symbol (uniqueness)

/* extras : 
"use strict" it is for considering js that this code maintains new version standards of JS

alert(16 + 13) = it will not show because it will ran by node.js, it has different function than console log. It creates popups actually

*/