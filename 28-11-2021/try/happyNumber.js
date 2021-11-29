function happyNumber(number){
    let map ={};
    let temp = 0;

    if(number < 1) return false;

    while(number !== 1 && !map[number]){
        map[number] = true;
        temp = 0;

        while(number > 0){
            temp += Math.pow(number % 10, 2);
            number = Math.floor(number/10);
        }
        number = temp;
    }
    return number === 1;
}

console.log(happyNumber(13));
