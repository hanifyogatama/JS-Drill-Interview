function exponentNumber(base, exponent) {
    let result = 1;
    for(i = 0; i < exponent; i++){
        result *= base;
    }

    return console.log(`${base}^${exponent}=${result}`);
}

let baseNum = parseInt(prompt("enter base number"));
let exponentNum = parseInt(prompt("enter exponent number"));
exponentNumber(baseNum,exponentNum);