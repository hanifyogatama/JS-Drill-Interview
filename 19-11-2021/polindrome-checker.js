function polindromeChecker(string){
    let lengthString = string.length;
    for(i = 1;i < lengthString / 2; i++){
        if(string[i] !== string[lengthString - 1 - i]){
            return "not a polindrome";
        }
    }
    return " a polindorme";
}

let input = prompt("enter the string");
console.log(polindromeChecker(input));