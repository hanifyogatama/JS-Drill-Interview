function exponentNumber(base, exponent) {
    let result = 1;
    for(i = 0; i < exponent; i++ ){
        result *= base;
    }
    console.log(`${base}^${exponent} = ${result}`);
}

let base = parseInt(prompt("enter base number"));
let exponent = parseInt(prompt("enter exponent"));
exponentNumber(base, exponent);

