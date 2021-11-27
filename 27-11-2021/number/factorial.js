function factorial(number){
    if(number < 0){
        console.log("negative number");
    } else if (number === 1){
        console.log(`factorial from ${number} is 1`);
    } else {
        let fact = 1;
        for(i = 1; i <= number; i++){
            fact *= i;
        }
        console.log(`factorial from ${number} is ${fact}`);
    }
}

let input = 5;
factorial(input);