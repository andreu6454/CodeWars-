function getDivisorsCnt(n){
    let count = 0;
    for(let key = 0; key <= n; key++){
        if(n % key === 0){

            console.log(key + " ")
            count++;
        }
    }
    return count;
}
