// largest array
let arrNum = [44,32,11,2,3,10,2,10,54,20];
let temp = 0;

arrNum.forEach((element) => {
    if(temp < element) {
        temp = element;
    }
})

console.log("Array numbers : " + arrNum);
console.log("Largest number : " + temp);

