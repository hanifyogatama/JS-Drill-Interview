function bubbleSortAsc(arrayNumber){
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

let numbers = [4,5,3,8,9,22,1,6,4];
bubbleSortAsc(numbers);