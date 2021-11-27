function polindrome(string){
    let stringLength = string.length;
    for(i = 1; i < stringLength/2; i++){
        if(string[i] !== string[stringLength - 1 - i]){
            return "it's not a polindrome";
        }
    }
    return "it's a polindrome";
}

let text = "kodok";
console.log(`${text}, ${polindrome(text)}`);