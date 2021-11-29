function fibonacci(num){
    let fibo = [];
    let num1 = 0;
    let num2 = 1;
    for(i = 0 ; i < num; i++){
        fibo.push(num1);
        let sum = num1+ num2;
        num1 = num2;
        num2 = sum;
    }
    return console.log(fibo);
}

fibonacci(5);
