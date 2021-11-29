function singleNumber(arrayNumber){
    let result = 0;
    let length = arrayNumber.length;

    for(let i = 0; i < length; i++){
        result ^= arrayNumber[i];
    }

    return result;
}

let input = [2,2,1];
console.log(singleNumber(input));

// with xor logic
