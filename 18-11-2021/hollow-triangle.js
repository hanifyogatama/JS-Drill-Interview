let n = 6;
let string = "";

for(i = 1; i <= n; i++){
    for(j = 0; j < i; j++){
        if(i === n){
            string += "*";
        } else {
            if(j == 0 || j == i - 1){
                string += "*";
            } else {
                string += " ";
            }
        }
    }
    string += "\n";
}

console.log(string);