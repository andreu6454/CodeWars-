function sortArray(array) {
    let newArray =[]
    let keys = []
    let count = 0
    for(let key in array){
        if(array[key]%2 != 0){
            newArray[key] = array[key]
            keys[count] = key
            count++
            console.log(count);
        }
    }
    newArray.sort((a,b) => a-b)
    count = 0
    for(let key2 in keys){
        if(keys[key2] != undefined){
            array[keys[key2]] = newArray[count]
            count++
        }
    }
    return array
}
