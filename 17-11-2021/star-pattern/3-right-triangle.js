let n = 5;
let string = "";

for(i = 0; i <= n; i++) {
    for(j = 0; j < n - i; j++){
        string += " ";
    }

    for(k = 0; k < i; k++) {
        string+= "*";
    }
    
    string += "\n";
}

console.log(string);
