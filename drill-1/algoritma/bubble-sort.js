function bubbleSortAsc(arrNumber) {
    let swap = true;
    while(swap) {
        swap = false;
        for(i = 0; i < arrNumber.length -1; i++) {
            if(arrNumber[i] > arrNumber[i+1]) {
                let temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
                swap = true;
            }
        }
    }
    console.log(arrNumber);
}

function bubbleSortDesc(arrNumber) {
    let swap = true;
    while(swap) {
        swap = false;
        for(i = 0; i < arrNumber.length - 1; i++) {
            if(arrNumber[i] < arrNumber[i+1]) {
                let temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
                swap = true;
            }
        }
    }

    return console.log(arrNumber);
}

let numbers = [3,2,1,4,6,4,8,7,9,5];
bubbleSortAsc(numbers);
bubbleSortDesc(numbers);