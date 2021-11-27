function bubbleNumberAsc(arrayNumber){
    let swap = true;
    while(swap){
        swap = false;
        for(i = 0; i < arrayNumber.length - 1; i++){
            if(arrayNumber[i] > arrayNumber[i+1]){
                let temp = arrayNumber[i];
                arrayNumber[i] = arrayNumber[i+1];
                arrayNumber[i+1] = temp;
                swap = true;
            }
        }
    }

    return console.log(arrayNumber);
}

function bubbleNumberDesc(arrayNumber){
    let swap = true;
    while(swap){
        swap = false;
        for(i = 0; i < arrayNumber.length-1; i++) {
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

let numbers = [2,3,4,0,3,5,1,11];
bubbleNumberAsc(numbers);
bubbleNumberDesc(numbers);