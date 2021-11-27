function quickSort(arrayNumber){
    if(arrayNumber.length <= 1){
        return arrayNumber;
    } else {
        let left = [];
        let right = [];
        let result = [];
        let pivot = arrayNumber.pop();

        for(i = 0; i < arrayNumber.length; i++){
            if(arrayNumber[i] <= pivot){
                left.push(arrayNumber[i]);
            } else {
                right.push(arrayNumber[i]);
            }
        }

        return result.concat(quickSort(left), pivot, quickSort(right));
    }
}

let numbers = [5,98,33,10,-9,0,57,32,48,11];
console.log(`Unsorted numbers : ${numbers} \nSorted numbers : ${quickSort(numbers)}`);