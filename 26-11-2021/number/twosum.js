// diketahui sekumpulan angka dalam array
// cari 2 elemen yang jika dijumlahkan akan sama nilainya dengan target

function twoNumber(numbers, target){
   let temp = [];
   for(i =0; i < numbers.length; i++){
      for(j =0; j < numbers.length; j++){
         if(numbers[i] + numbers[j] === target){
            temp.push(i);
            temp.push(j);
         }
      }
   }
   return temp;
}

let numbers = [2,3,4,2,3,10,22,44];
console.log(twoNumber(numbers,7));