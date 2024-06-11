//part-> 1(starts)

//Declaring a function

function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("E");
    console.log("C");
    console.log("T");
}

//this statement refers to the reference of the function

//sayMyName

//calling the function with brackets
sayMyName();

//creating a new function and sending arguments to it & also returning a result from function

function addTwoNum (num1,num2){

   //since in JS parameter's datatypes needn't to declare explicitly that's why it's a good practice to check
   //whether the given arguments was the correct datatype that you're working with it in that particular function

    if(typeof(num1) === "number" && typeof(num2) === "number"){
        let result = num1+num2;
       return result;
    }
    
    //return num1+num2; (short-cut)
}
const result = addTwoNum(4,6);
console.log(result);


//what happens when no arguments passed to the function
function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a valid username");
        return;
    }
    // another way to write the if function
    // if(!username){
    //     console.log("please enter a valid username");
    //     return;
    // }
    
    return `${username} just logged in`;
}

console.log(loginUserMessage("mitchell"));
//when empty value send in the function then it'll produce an undefined value
//console.log(loginUserMessage());

//in this example if no arguments passed to function then sam would be value of username by default
//and if any arguments passed to the function then that value would be the value of username
function loginUserMessage(username = "sam"){
    
    return `${username} just logged in`;
}
console.log(loginUserMessage());


//part-> 1(ends)

//part-> 2(starts)

//when how many arguments would be passed to a function is undefined then 
//rest operator used to store all the arguments as an array form & returns an array of the 
//passed arguments

function spreadOpe(...num){
    console.log(num);
    console.log(typeof num);
    
    return num;
}
spreadOpe(22,335,33,322);


//passing an object as an argument in a function
const Obj = {
    userName: "Sammy",
    age : "23"
}

function objectFunc(currObj){
    console.log(`user name: ${currObj.userName}\n age : ${currObj.age}`);
}

objectFunc(Obj);


//passing an array as an argument in a function

const arr = [100,33,332];

function arrFunc(currArr){
    console.log(currArr[1]);
}

arrFunc(arr);


//part-> 2(ends)


//part-> 3(starts)

//remember global and block scopes???

//scopes

function one(){
    const userName = "Henry";

     function two(){
        console.log(userName);
        const website = "youtube";
     }

    // console.log(website); (it can't be accessed from here bcz it's a block declaration element of func : two)

     two();
}

one();

if(true){
    const userName = "Nisham";
     if(userName === "Nisham"){
        const website = " youtube";
        console.log(userName+website);
     }
     //console.log(website) (will produce an error)
}

//console.log(userName) (will also produce an error)


//hoisting in JS

//when functions declared in its classical style (that means that function doesn't assinged to any variable )
//then that function can be called before declare it but if that functiona assigned to a variable
//then it first has to be declared then that function can be called

//right way
addOne(4);

function addOne(num){
    const result = 5 + num;
    console.log("addOne function:" ,result);
}


//right way

const funcVar =  function(num){
    const result = 5 + num;
    console.log("funcVar function:" ,result);
}

funcVar(5);

//part-> 3(ends)


//part-> 4(starts)

//arrow function and this keyword

//`this` keyword with the object 

const user = {
    userName : "Maqcullum",
    email : "ma3343@gamil.com",

    welcomeMessage : function(){
        console.log(this); //(here, `this` keyword holds the current object bcz it's called in this block)
        console.log(`${this.userName} welcome to our website`);
    }
}

//console.log(this) (here, `this` keyword holds the window object bcz it's called globally);
user.welcomeMessage();
user.userName = "Brendon";
user.welcomeMessage();

//`this` keyword doesn't work with functions 
//following code won't work and it'll result in undefined

function print(){
    const userName = "Jimmy";
    console.log(this.userName);
}

print();

//arrow function
const func1 = ()=>{
    const userName = "Jimmy";
    console.log(this.userName);
} 
func1();  //it'll also produce undefined result..

//basic syntax of arrow function

const addSum1 = (num1,num2)=>{
    return num1+num2;
}
console.log(addSum1(4,5));

//another method to write the previous code(this method called as implicit return)

const addSum2 = (num1,num2)=> (num1+num2);
console.log(addSum2(7+9));

//IIFE

function printFunc(){
   console.log(`function executed`);
}
printFunc();

//below is a immediately invoked function

(function printFunct(){
    console.log(`function executed`);
 })();

//in order to use multiple iife then we've to put semicolon 
//before the first function

 ((name)=>{
    console.log(`function executed ${name}`);
 })('mitchell')



//part->4(ends)