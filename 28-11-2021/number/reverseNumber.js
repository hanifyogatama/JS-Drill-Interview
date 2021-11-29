function reversedNumber(num) {
    let number = num;
    let reversed = 0;
    while(number > 0){
        let lastDigit = number % 10;
        reversed = reversed * 10 + lastDigit;
        number = Math.floor(number/10)
    }

    return reversed;
}

console.log(reversedNumber(123456789));