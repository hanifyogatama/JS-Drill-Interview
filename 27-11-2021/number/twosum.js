function twoSum(numbers, target){
    let temp =[];
    for(i =0; i < numbers.length; i++){
        for(j =0; j < numbers.length; j++){
            if(numbers[i] + numbers[j] === target){
                temp.push(i);
                temp.push(j);
            }
        }
    }
    return temp;
}

let input = [4,3,2,5,1,6];
console.log(twoSum(input,7));