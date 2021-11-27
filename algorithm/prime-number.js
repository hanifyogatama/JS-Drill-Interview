function primeNumber(number) {
    let prime=[];
    let divisor = 2;

    while(number > 2) {
        if(number % divisor == 0) {
            prime.push(divisor);
            number /= divisor;
        } else {
            divisor++;
        }
    }
    return prime;
}

let num = parseInt(prompt("Enter your number ..."));
console.log(primeNumber(num));