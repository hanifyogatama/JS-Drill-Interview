const sort = function(arr) {

    for (let i = 0; i < arr.length; i ++ ){
        var temp = arr[i]
        var j = i - 1
        while (j >= 0 && temp.length < arr[j].length) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = temp
    }
}