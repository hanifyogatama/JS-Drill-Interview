function bubbleSortAsc(arrayNumber){
    let swap = true;
    while(swap){
        swap = false;
        for(i = 0; i < arrayNumber.length - 1; i++){
            if(arrayNumber[i] > arrayNumber[i + 1]){
                let temp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[i + 1];
                arrayNumber[i+1] = temp;
                swap = true;
            }
        }
    }
    return console.log(arrayNumber)
}

function bubbleSortDesc(arrayNumber){
    let swap = true;
    while(swap){
        swap = false;
        for(i = 0; i < arrayNumber.length - 1; i++){
            if(arrayNumber[i] < arrayNumber[i+1]){
                let temp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[i+1];
                arrayNumber[i+1] = temp;
                swap = true;
            }
        }
    }
    return console.log(arrayNumber);
}

let numbers = [3,2,1,6,7,8,9,3,4,2,5];
bubbleSortAsc(numbers);
bubbleSortDesc(numbers);