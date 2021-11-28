function parenthesesChecker(string){
    let map = {
        "}" : "{",
        ")" : "(",
        "]" : "[",
    }

    let stack = [];

    for(i = 0; i < string.length; i++){
        if(string[i] === "{" || string[i] === "(" || string[i] === "["){
            stack.push(string[i]);
        } else if(stack[stack.length-1] === map[string[i]]){
            stack.pop();
        } else {
            return false;
        }
    }

    return stack.length ? false : true;
}

