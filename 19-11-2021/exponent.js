function exponent(base, exponent){
    let result = 1;
    for(i =1; i <= exponent; i++){
        result *= base;
    }
    return result;
}

let baseNumber = parseInt(prompt("enter base number"));
let exponentNumber = parseInt(prompt("enter exponent number"));

console.log(`${baseNumber}^${exponentNumber} = ${exponent(baseNumber, exponentNumber)}`);