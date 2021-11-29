let numbers = [3,5,3,2,4,53,5,22];
let temp =0;
numbers.forEach((element) => {
    if(temp < element){
        temp = element;
    }
})

console.log(temp);