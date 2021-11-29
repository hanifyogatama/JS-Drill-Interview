

function bubbleSortAsc(numbers){
    let swap = true;
    while (swap) {
        swap = false;
        for(i = 0; i < numbers.length - 1; i++){
            if(numbers[i] > numbers[i+1]){
                let temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swap = true; 
            }
        }
    }
    return console.log(numbers);
}

function bubbleSortDesc(numbers){
    let swap = true;
    while (swap) {
        swap = false;
        for(i = 0; i < numbers.length-1; i++){
            if(numbers[i] < numbers[i+1]){
                let temp = numbers[i];
                numbers[i] = numbers[i+1];
                numbers[i+1] = temp;
                swap = true;
            }
        }
    }
    return console.log(numbers);
}


let input = [3,5,300,0,3,51,23,6,6];
bubbleSortAsc(input);
bubbleSortDesc(input);