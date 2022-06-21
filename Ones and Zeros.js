const binaryArrayToNumber = arr => {
    arr.reverse()
    let number = 0;
    for(let key in arr){
        number += 2**key*arr[key]
    }
    return number
};
