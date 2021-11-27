function exponent(base, exponent){
    let result = 1;
    for(i = 0; i < exponent; i++){
        result *= base;
    }
    return result;
}

let baseNum = 3;
let exponentNum = 3;
console.log(`expoent from ${baseNum}^${exponentNum} is ${exponent(baseNum, exponentNum)}`);