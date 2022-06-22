function findOdd(A) {
    let counter = 0
    let number = 0
    for(let key in A){
        for(let key2 in A){
            if(A[key]===A[key2]) {
                counter++
            }
        }
        if(counter %2 !== 0){
            number = A[key]
            counter = 0
        }else {
            counter = 0
        }
    }
    return number;
}
