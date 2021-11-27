function bubbleSortAsc(arrNumbers) {
  let swap = true;
  while (swap) {
    swap = false;
    for (i = 0; i < arrNumbers.length - 1; i++) {
      if (arrNumbers[i] > arrNumbers[i + 1]) {
        let temp = arrNumbers[i];
        arrNumbers[i] = arrNumbers[i + 1];
        arrNumbers[i + 1] = temp;
        swap = true;
      }
    }
  }

  return console.log(arrNumbers);
}

function bubbleSortDesc(arrNumber) {
  let swap = true;
  while (swap) {
    swap = false;
    for (i = 0; i < arrNumber.length - 1; i++) {
      if (arrNumber[i] < arrNumber[i + 1]) {
        let temp = arrNumber[i];
        arrNumber[i] = arrNumber[i + 1];
        arrNumber[i + 1] = temp;
        swap = true;
      }
    }
  }
  return console.log(arrNumber);
}

let numbers = [6, 3, 2, 4, 2, 1, 0, 10];
bubbleSortAsc(numbers);
bubbleSortDesc(numbers);

// step by step
