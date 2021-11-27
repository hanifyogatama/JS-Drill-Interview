console.log("a");
let timothy = setTimeout(() => { console.log("c")}, 10);
let timmy = setTimeout(() => {console.log("b")}, 1);
let time = setTimeout(() => { console.log("d")}, 0);
console.log("e")



/* result
a
e
b
d
c
*/

