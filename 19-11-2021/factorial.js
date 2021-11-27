function factorial(number){
    if(number < 0){
        console.log("not a negative number");
    } else if(number === 0){
        console.log(`factorial ${number} is 1`);
    } else {
        let fact = 1;
        for(i = 1; i <= number; i++){
            fact *= i;
        }
        console.log(`factorial ${number} is ${fact}`);
    }
}

let input = parseInt(prompt("enter the number"));
factorial(input);
