function fiboSum(num){
    let fibo = [0,1];
    
    if(num <=2) return 1;

    for(i = 2; i <=num; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    return console.log(fibo[num]);
}

fiboSum(2);
// output 8

