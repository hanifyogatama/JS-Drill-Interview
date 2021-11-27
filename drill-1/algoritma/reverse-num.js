function reverseNumber(num) {
    let number = num;
    let reverse = 0;

    while(number > 0){
        let value = number % 10;
        reverse = reverse * 10 + value;
        number = Math.floor(number / 10);
    }

    return reverse;
}

let inputNumber = parseInt(prompt("Enter the number"));
console.log(`${inputNumber} to ${reverseNumber(inputNumber)}`);

