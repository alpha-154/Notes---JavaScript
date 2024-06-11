//here , we'll learn how to use Date() method and

let date = new Date();

let demo = document.querySelector(".demo");

demo.innerHTML = date;
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(date.toJSON());
console.log(date.toTimeString());

//we can also pass year,month,date as argument in Date() method
let dateTwo = new Date(2024,0,24);
console.log(dateTwo.toDateString());
let dateThree = new Date(2024,0,24,10,8);
console.log(dateThree.toLocaleString());


//different way initiate dateTwo variable
let dateFour = new Date("2024-01-24");
console.log(dateFour.toLocaleString());

//getting time in ms(mili-second)
let timeStamp =  Date.now();
console.log(timeStamp);

//converting sec to mili-second
console.log(Math.floor(Date.now()/1000));

//getMonth() and getYear()

let month = new Date();
console.log(month.getMonth());
//in Date() , month starts from 0 and ends at 11
let year = new Date();
console.log(year.getFullYear());