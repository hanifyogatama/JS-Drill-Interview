function reverseNumber(num) {
    let number = num;
    let reverse = 0;
    while(number > 0){
        let value = number % 10;
        reverse = reverse * 10 + value;
        number =Math.floor(number/10);
    }

    return reverse;
}

let input = parseInt(prompt("enter the number"));
console.log(reverseNumber(input));