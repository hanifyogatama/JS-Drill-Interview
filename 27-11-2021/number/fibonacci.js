function fibonacci(num){
    let fibo = [];
    let num1 =0;
    let num2 =1;

    for(i = 1; i <= num; i++){
        fibo.push(num1);
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return fibo;
}

let number = 5;
console.log(fibonacci(number));