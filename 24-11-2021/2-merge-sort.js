function mergeSort(arrayNumber){
    if(arrayNumber.length <= 1){
        return arrayNumber;
    }

    const middle = Math.floor(arrayNumber.length/2);
    const left = arrayNumber.slice(0, middle);
    const right = arrayNumber.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result =[];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let numbers = [22,89,0,-4,23,76,100,-7];
console.log(`Unsorted numbers : ${numbers} \nSorted number : ${mergeSort(numbers)}`);
