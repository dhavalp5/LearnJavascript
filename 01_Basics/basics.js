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
(function chai(){
    // console.log(`hello World`);
})();

( ()  => {
    // console.log(`hello World`);
})();

( (name)  => {
//     console.log(`${name}`);
})("Dc");


//++++++++++++++++ For Of loop ++++++++++++++++
//iteratable for all elements like array and map except object
for (const element of myArr) {
    // console.log(element);
}

let userName = newObj.name;
for (const name of userName) {
    // console.log(`single character is ${name}`);
}

// MAP
//To add unique key value pair map is used, 
//duplication is not allowed

const map = new Map()
map.set("IN", "India")
map.set("FR", "France")
map.set("IT", "Italy")

//to print complete map
for (const key of map) {
    // console.log(key)
}

//To print individual key and value with array destructuring
for (const [key,value] of map) {
    // console.log(`Key = ${key} and Value = ${value} `)
}

//++++++++++++++++ For In loop ++++++++++++++++
//iteratable for all elements like array and object except map
//FOROF loop gives directly value where as FORIN loop will give key directly

for (const key in newObj) {
    // console.log(`key is ${key} and value is ${newObj[key]}`);
}

for (const key in myArr) {
    // console.log(`key is ${key} and value is ${myArr[key]}`);
}

//++++++++++++++++ For Each loop ++++++++++++++++

string_array = ["js", "react", ".net", "aws", "azure"]

string_array.forEach((key) => {
    // console.log(key);
});

// Print whole array by foreach loop
string_array.forEach((key,index,arr) => {
    //  console.log(`Key is ${key} on Index ${index}, whole array is ${arr} `);
});



//++++++++++++++++ Filters and map ++++++++++++++++

// array of object
const books = [{title: "book1", genre: "History", publish: 1992},
    {title: "book2", genre: "Science", publish: 1995},
    {title: "book3", genre: "Fiction", publish: 1998},
    {title: "book4", genre: "Non-Fiction", publish: 2001}
]

//return automatically if we are not adding {}
let filteredBooks = books.filter( (bk) => bk.publish >= 1998)
// console.log(filteredBooks);

//if we add {} then have to add return keyword
filteredBooks = books.filter( (bk) => {return bk.publish > 1998})
// console.log(filteredBooks);


//MAP()
mappedNumbers = myArr.map( (num) => num + 10);
// console.log(mappedNumbers);

// chaining
let newNums = myArr
.map((num) => num * 100)
.map((num) => num + 1)
.filter((num) => num <= 100);

// console.log(newNums);