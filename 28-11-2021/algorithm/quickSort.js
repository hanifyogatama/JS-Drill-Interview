function quickSort(numbers){
    if(numbers.length <= 1){
        return numbers;
    } else {
        let left = [];
        let right = [];
        let result = [];
        let pivot = numbers.pop();

        for(i = 0; i < numbers.length; i++){
            if(numbers[i] <= pivot){
                left.push(numbers[i]);
            } else {
                right.push(numbers[i])
            }
        }

        return result.concat(quickSort(left), pivot, quickSort(right));
    }
}

let numbers = [3,40,5,2,0,55,43,20,46,];
console.log(quickSort(numbers));