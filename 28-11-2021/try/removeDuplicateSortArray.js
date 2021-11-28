// remove duplicae from sorted array in place

function removeDuplicate(numbers){
    if(numbers.length === 0) {
        return 0;
    }

    let i = 0;
    let j = 1;
    while(j < numbers.length){
        if(numbers[j] !== numbers[i]) {
            i++;
            numbers[i] = numbers[j];
            j++;
        } else {
            j++;
        }
    }

    return i+1;
}

let numbers = [2,2,2,1,1,4,5,6,7,8,3];
console.log("length : " + removeDuplicate(numbers));