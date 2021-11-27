function polindromeNumber(num){
    let number = num;
    let reversed = 0;
    
    if(number < 0) return false;
    while (number > 0) {
        let lastDigit = number % 10;
        reversed = (reversed * 10) + lastDigit;
        number = Math.floor(number/10);
    }
    return num === reversed;
}

console.log(polindromeNumber(1010));