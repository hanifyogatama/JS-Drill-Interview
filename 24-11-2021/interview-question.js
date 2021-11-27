// implement spread syntax ES6
let myArray = ["a","b","c","d"];

// myArray.push("end");
// myArray.unshift("start");

// console.log(myArray);

// ES6
myArray = ["start",...myArray];
console.log(myArray);

myArray = [...myArray, "end"];
console.log(myArray);

myArray = ["hai",...myArray,"hola"];
console.log(myArray);

// how fo you create a private variable in javascript
function secretVariable(){
    let private = "super secret code";
    return function(){
        return private
    }
}

let getPrivateVariable = secretVariable()
console.log(getPrivateVariable())


// what is the output
// var num = 4;
// function outer(){
//     var num = 2
//     function inner(){
//         num++;
//         var num = 3;
//         console.log(num);
//     }
//     inner();
// }
// outer();

// result is 3


// what is the output?
console.log(typeof typeof 1);

// what is the output

let hero = {
    _name: "John Doe",
    getSecretIdentity: function(){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;
// var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);

console.log(stoleSecretIdentity());
console.log(hero.getSecretIdentity());

