//part:1 => (starts)

//creating of an object

const obj1 = {
    name: "mitchell",
    age : "22",
    email: "mitchell@google.com",
}

//accessing the object's properties through different methods

console.log(obj1.name);
console.log(obj1["name"]);

//modifying the values of the properties

obj1.name = "johnson";

//freezing an object (not let anyone to modify the object's property values)

Object.freeze(obj1);

//creating a symbol and accessing it from the object

const sym = Symbol("symbol1");

const obj2  = {
    name: "michell",
    age : "24",
    email: "michell@google.com",
    [sym] : "objSymbol1"
}

console.log(obj2[sym]);

//adding a function to an object and logged it in the console

obj2.greeting = ()=>{
    console.log("from obj2");
}

//using `this` keyword to accessing the current object properties

//Aware :  In JavaScript, arrow functions do not have their own this context. 
//When you use this inside an arrow function, it refers to the this value of 
//the enclosing execution context, which in this case is the global context 
//(or undefined in strict mode).

//wrong method
// obj2.greetingTwo = ()=>{
//     console.log(`from obj2 ${this.name}`);
// }

//right method
obj2.greetingTwo = function () {
    console.log(`from obj2 ${this.name}`);
}

//part:1 (ends)


//part:2 (starts)


//creating an object through constructor

const obj3 = new Object();

//it's not always necessary to declare object's property while creating an object

obj3.name = "sam";
obj3.age = "25";
obj3.email = "sam@gamil.com";


//creating nested objects

const nest = {
    email : "pit@gmail.com",
    fullName : {
        firstName : {
            fName : "Pit"
        },
        lastName : {
            lName : "Hammer"
        }
    }
}

//accessing the object's properties values

console.log(nest.email);
console.log(nest.fullName.firstName.fName);
console.log(nest.fullName.lastName.lName);

//concatenating objects into an another object
const obje1 = {
    1 : "a",
    2 : "b"
}
const obje2 = {
    3 : "c",
    4 : "d"
}
const obje3 = {
    5 : "e",
    6 : "f"
}

//concatenating through assign() methods

//const obje = Object.assign({},obje1,obje2,obje3);

//here , empty object (which is optional) is a target object where all other
//source objects (such as obje1,obje2,obje3) will be concatenated.
//console.log(obje);

//another way to do the previous task 
const obje = {...obje1,...obje2,...obje3};
console.log(obje);


//creating an array of objects(usually from API's return values comes in this from)

const arr = [
    {
        name: "Peter"
    },
    {
        name: "Sid"
    },
    {
        name: "Brendon"
    }
]

//accessing the objects(which are indices of the array)
console.log(arr[0].name);
console.log(arr[1].name);
console.log(arr[2].name);

//in some cases we've to take the object's keys as the array's elements to run
//a loop with it

const objKeys = Object.keys(obj1);
console.log(objKeys);

//we can do the same task with the object's values also

const objValues = Object.values(obj1);
console.log(objValues);

//we can store the object's key-values as an indices of an arrray

const objKeysValues = Object.entries(obj1);
console.log(objKeysValues);
console.log(objKeysValues[0][1]);

//to check whether a property exists in an object , objName.hasOwnProperty() method used
//it's especially used while running a loop over an object 

console.log(obj1.hasOwnProperty("email"));


//part:2(ends)