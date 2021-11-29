function majorityElement(arrayNumber){
    let map = {};
    let max = 0;
    let majorNum = 0;
    let length = arrayNumber.length;

    for(let i = 0; i < length; i++){
        if(!map[arrayNumber[i]]) {
            map[arrayNumber[i]] = 0;
            map[arrayNumber[i]]++;
        } else if(map[arrayNumber[i]] > max){
            majorNum = arrayNumber[i];
            max = map[arrayNumber[i]];

        }
    }

    return majorNum;

}
let input = [1,1,1,4,5];
console.log(majorityElement(input));