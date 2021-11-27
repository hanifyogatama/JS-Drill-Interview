function getSecondLargestNumber(numArray) {
    let largest = numArray[0];
    let secondLargest = numArray[1] < largest ? numArray[1] : largest;

    for(i of numArray) {
        if(i > largest){
            secondLargest = largest;
            largest = i;
        }

        if(i > secondLargest && i < largest ){
            secondLargest = i;
        }
    }

    return secondLargest;
}

let numbers = [44,3,22,39,10,19,0,43,20];
console.log("Numbers : " + numbers);
console.log("Secong largest : " + getSecondLargestNumber(numbers));