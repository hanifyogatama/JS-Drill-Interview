function fibonacci(num) {
    let arr = [];
    let num1 = 0;
    let num2 = 1;

    for(i = 1; i <= num; i++) {
        arr.push(num1);
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }

    return arr;
}

function fibonacciSum(num) {
    let fibo = [0,1];

    if(fibo <= 2) return 1;
 
    for(i = 2; i <= num; i++ ) {
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return fibo[num]
}

let input = parseInt(prompt("enter the number"));

console.log(fibonacci(input));
console.log(`jumlah ${fibonacciSum(input)}`);