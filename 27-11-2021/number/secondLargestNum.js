function getSecondLargestNumber(numbers){
    let largest = numbers[0];
    let secondLargest = numbers[1] < largest ? numbers[1] : largest;
    
    for(i of numbers){
        if(i > largest){
            secondLargest = largest;
            largest = i;
        } else if(i > secondLargest && i < largest){
            secondLargest =i;
        }
    }

    return secondLargest;
}

let numbers = [33,2,4,33,50,56,43,23,87];
console.log("Numbers : " + numbers);
console.log("Second largest number : " + getSecondLargestNumber(numbers));