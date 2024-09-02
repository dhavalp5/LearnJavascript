let accountName = "Hello"
const accountId = 10

/* never use var in js */

// console.log(accountName);
// console.table([accountId,accountName])

//++++++++++++++++Datatype conversion++++++++++++++++

let boolValue = true
let accountIdInString = String(accountId)
// console.log(accountId)
// console.log(typeof accountIdInString)

let boolValueInNumber = Number(boolValue)
// console.log(boolValue)
// console.log(typeof boolValueInNumber)


//++++++++++++++++Array++++++++++++++++

let myArr = [0,1,2,3,4,5]
const myArr2 = myArr.join(); //Join() method converts array in string in comma seperated form

// console.log(myArr);
// console.log(myArr2);

// console.log(myArr.slice(1,3)) // this will not manipulate the original array
// console.log("Slice",myArr);

// console.log(myArr.splice(1,3)) // this will manipulate the original array
// console.log("Splice", myArr); // return values which are out of the range

 let new_arr = [1,2,3,[2,4],5,6,7,[3,6,9]]
// console.log(new_arr.flat(Infinity)); //flat() gives you the all the sub arrays or sub sub array's value in a single array 

// console.log(Array.from("HelloWorld")) //Convert the string into array
// console.log(Array.of(100,200,new_arr)) // convert any Item into array


//++++++++++++++++Objects++++++++++++++++

//object laterls
let firstSymbol = Symbol("Key1") //define symbol
const newObj = {
    name : "Dhaval",
    email : "Dhaval@google.com",
    age : 25,
    isLoggedIn : false,
    [firstSymbol] : "MyKey1" //to define symbol always add []
}

// console.log(newObj.name); //old method
// console.log(newObj["name"]) // new method
// console.log(typeof newObj[firstSymbol]); //to access symbol always add []
// console.log(newObj);

const userObj = new Object();   // known as singleton object
const userObj1 = {};            // Also, an object but a non singleton object

// console.log(newObj.hasOwnProperty('isLogged')); // Accessing property and method


//object destructuring
const {email : mail} = newObj;
//console.log(mail);


//++++++++++++++++Functions++++++++++++++++

function calculate(number1, number2){ //here number1 and number2 is known as parameters
    // we can call this function before line number 72
    return number1 + number2
}

// console.log(calculate(10,12)); // here 10 and 12 is known as Arguments

//Function declaration
//calculate functions one above and one below are same
const calculate1 = function(number1, number2){ // we can not call this function before line number 81 
    return number1 + number2
}


// passing array in function
function printSecondNumber(getArray){
    console.log(getArray[1])
}

// printSecondNumber(myArr);        //pass array by variable
// printSecondNumber([10,20,23]);   // directly pass array



//Passing Object
function printUserDetails(getObject){
    // console.log(` name: ${getObject.name}, email: ${getObject.email}`)
}

//printUserDetails(newObj)  //pass object by variable
printUserDetails({
    name : "Dc",
    email: "dc@google.com"
})  //pass object directly


//Arrow Function
const calculate2 = (number1, number2) => {
    return number1 + number2
}

const calculate3 = (number1, number2) => (number1 + number2) // Implicit Return

const calculate4 = (number1, number2) => ({username: "Dc"}); // Implicit Return of an object


//Example of IIFE (Immidiately Invoked function Expression)
// (function chai(){
//     console.log(`hello World`);
// })();

// ( ()  => {
//     console.log(`hello World`);
// })();

( (name)  => {
    console.log(`${name}`);
})("Dc");