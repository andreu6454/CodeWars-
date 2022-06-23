let min = function(list){
    let minInt = list[0]
    for(let key in list){
        if(list[key] < minInt){
            minInt = list[key]
        }
    }
    return minInt;
}

let max = function(list){
    let maxInt = list[0]
    for(let key in list){
        if(list[key] > maxInt){
            maxInt = list[key]
        }
    }
    return maxInt;
}
