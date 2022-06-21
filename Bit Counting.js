const countBits = function(n) {
    let number = n.toString(2)
    let count = 0

    for(let key in number){
        number[key] /= 1
        if(number[key] == 1){
            count++
        }
    }
    return count
};
