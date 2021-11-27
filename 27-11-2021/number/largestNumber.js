let arrNum = [22,23,45,89,45,65,21,12];
let temp = 0;

arrNum.forEach((element)=> {
    if(temp < element){
        temp = element;
    }
});

console.log(`Numbers : ${arrNum}`);
console.log(`Largest Number : ${temp}`);

