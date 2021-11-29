function plusOne(numbers){
    let length = numbers.length -1;
    let value = 0;
    let carry = 1;
    while (length >= 0 && carry) {
        value = numbers[length] + carry;
        carry = Math.floor(value/10);
        numbers[length] = value % 10;
        length--;
    }

    if(carry){
        numbers.unshift(carry);
    }
    return numbers;
}

let numbers = [1,2,3];
console.log(plusOne(numbers));