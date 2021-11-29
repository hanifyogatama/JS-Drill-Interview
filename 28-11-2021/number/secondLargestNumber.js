function secondLargestNumber(numbers){
    let largest = numbers[0];
    let secondLargest = numbers[1] < largest ? numbers[1] : largest;

    for(i of numbers){
        if(i > largest){
            secondLargest = largest;
            largest = i;
        } else if(i > secondLargest && i < largest){
            secondLargest = i;
        }
    }
    return secondLargest; 
}

console.log(secondLargestNumber([33,22,45,2,2,1,66,0,3,3]));