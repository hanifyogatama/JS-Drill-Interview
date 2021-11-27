function exponentNumber(base, exponent) {
    let result = 1;
    for(i = 0; i < exponent; i++) {
        result *= base;
    }

    console.log(`${base}^${exponent}=${result}`);
}

let base = parseInt(prompt("Base number"));
let exponent = parseInt(prompt("Exponent number"));
exponentNumber(base, exponent);