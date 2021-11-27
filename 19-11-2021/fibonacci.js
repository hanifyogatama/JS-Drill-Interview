function fibonacci(number){
    let fibo = [];
    let num1 = 0;
    let num2 = 1;
    for(i = 1; i <= number; i++){
        fibo.push(num1);
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return console.log(fibo);
}


function fibonacciSum(num){
    let fibo = [0,1];
    if(num <= 2) return 1;

    for(i = 2; i <= num; i++){
        fibo[i] = fibo[i -1] + fibo[i - 2];
    }
    return fibo[num];
}

let number = parseInt(prompt("enter number"));
fibonacci(number);
console.log(`jumlah ${fibonacciSum(number)}`)