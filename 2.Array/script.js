// Array's basics: 

//Different ways to declare arrays->
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];
const myArr2 = new Array(1, 2, 3, 4);

// console.log(myArr[1]);

// Array methods->
  
  //push() method used to add element at the back of an array
   myArr.push(6);
  //pop() method used to delete element from the back of an array
   myArr.pop();
   //usshift() method used to add element at the front of an array
   myArr.unshift(9);
   //shift() method used to delete the first element of an array
   myArr.shift()
  //includes() method checks whether the value passed in the array
  //is existed or not
  console.log(myArr.includes(9));
  //indexOf() method gives the index of the value that passed in the function
  console.log(myArr.indexOf(3));
  //join() method converts an array into a string
  const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice(), splice() methods:
//slice() method gives a portion of the array from starting value 
//till ending value(excluding)
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B ", myArr);

//splice() method gives a portion of the array from starting value to
//including ending value and it's also changed the orginal array
//where slice() method doesn't change the orginal array
const myn2 = myArr.splice(1, 3);
console.log("C ", myArr);
console.log(myn2);

const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

 //marvel_heros.push(dc_heros) (this method will push de_heros as an
 //whole array at the last index of the marvel_heros array)

// console.log(marvel_heros);
//this how we've to access the dc_heroes
// console.log(marvel_heros[3][1]);

//correct way to add an array at the end of an another array
 const allHeros = marvel_heros.concat(dc_heros);
 console.log(allHeros);

//more effective way to achieve the previous task it's called spreading method
const all_new_heros = [...marvel_heros, ...dc_heros];

// console.log(all_new_heros);

//here, we're assigning an array and also an array within another array as values in an array
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];
//by doing flat() method, this complex array will turn into an flat array
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);



console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
console.log(Array.from({name: "hitesh"})); // interesting

let score1 = 100
let score2 = 200
let score3 = 300
//here, we're using Array.of() method to form an array with variables
console.log(Array.of(score1, score2, score3));