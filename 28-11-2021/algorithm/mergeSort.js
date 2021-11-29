function mergeSort(numbers){
   if(numbers.length <= 1){
       return numbers;
   }

   let middle = Math.floor(numbers.length/2);
   let left = numbers.slice(0, middle);
   let right = numbers.slice(middle);

   return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
    let result = [];
    let leftIndex = 0;
    let rightIndex= 0;

    while(leftIndex < left.length && rightIndex < right.length){
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

let numbers = [2,4,6,0,5,33,23,20,42,56];
console.log(mergeSort(numbers));