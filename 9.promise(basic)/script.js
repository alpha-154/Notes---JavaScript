//the purpose of this project is to understand
//the promise concept
//resolve is used connect with the then() and send 
//the values in the then after the async tasks 
//and reject values is used to connect with the catch()
//and also send the message in the catch()

//example no: 1
const promiseOne = new Promise((resolve,reject)=>{
    //async taks
    //db tasks
    setTimeout(() => {
      console.log("async task is complete");
      resolve();  
    }, 2000);
}

);
promiseOne.then(()=>{
    console.log("promise is consumed");
});

//example no: 2(written in another way)
new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({userName : "mitchell" , gmail : "mitchell07@gmail.com"})
    },2000);
}

).then((user)=>{
   console.log(user);
})

//example no: 3
// in this example we'll build a complete promise .From the promise
// a resolve or reject will pass and we'll access these values in then() or
// catch() respectively. And then we'll chain the then with another then
// to pass the values from then to the next then or next step since
// we can't directly access the 1st then values
//finally() is default that's means it will always occur in promises

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //play with error variable to understand how does resolve & reject will work
        let error = false;
        if(!error){
            resolve({userName : "mitchell" , Id : "34dd"});
        }
        else{
            reject("ERROR : something went wrong");
        }
    },2000);
}

);

promiseThree
.then((user)=>{
    return user.userName;
})
.then((userName)=>{
    console.log(userName);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log("The Promise is either resolved or rejected");
})

//example no : 4
//will do the previous task again but here we'll be using async-await
//instead of then 

const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        //play with error variable to understand how does resolve & reject will work
        let error = false;
        if(!error){
            resolve({userName : "mitchell" , Id : "34dd"});
        }
        else{
            reject("ERROR : something went wrong");
        }
    },2000);
}

);
async function accessPromiseFour (){
    try{
        const response = await promiseFour;
        console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
//here, main difference between the previous method and this method
//is that here we can control when to use the resolve method send values
//but with the than we can't 
accessPromiseFour();

//here, in this example we'll be doing a real practice of async-await

async function getData(){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
       // console.log(response);
        const data = await response.json();
        console.log("fetching with async-await");
        console.log(data);
    } catch (error) {
        console.log("E: ",error);
    }
}
getData();


//fetching data with then() and catch()

fetch("https://api.github.com/users/hiteshchoudhary")
.then((response)=>{
    return response.json();
}).then((data)=>{
    console.log("fetching with then() & catch()")
    console.log(data);
}).catch((error)=>{
    console.log("Er : ",error);
})
