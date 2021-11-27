function reverseNumber(num){
    let number = num;
    let reversed  = 0;
    while(number > 0){
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number/10);
    }
    return reversed;
}

let number = 123123;
console.log(`${number}, reverse number is ${reverseNumber(number)}`);