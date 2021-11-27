// push element in array
let arr= [1,2];
arr.push.apply(arr,[3,4,5]);
console.log(arr)

let arr1 = [1,2];
let arr2 = [1,2,3];
arr1.push(...arr2);
console.log(arr1);

// copying an array
let a = [1,2];
let b = [1,2,3];
a = [...b];
console.log(a) 

// concatenating 2 arrays
let c = [1,2];
let d = [1,2,3];
console.log(c.concat(d))
console.log(...c,...d);

// converting string to array
let e = "hanif";
let f = e.split('');
console.log(f);

let e2 = "hanif";
let f2 = [...e2];
console.log(f2);

// use max andmin function 
var num  = [1,3,2,5,6,4,8];
console.log(Math.max(...num));
console.log(Math.min(...num));

