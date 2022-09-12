function giveChange(amount) {
    let Change = [0,0,0,0,0,0]
    if(amount >= 100){
        while(amount >= 100){
            amount -= 100
            Change[5] += 1
        }
    }
    if(amount >= 50){
        while(amount >= 50){
            amount -= 50
            Change[4] += 1
        }
    }
    if(amount >= 20){
        while(amount >= 20){
            amount -= 20
            Change[3] += 1
        }
    }
    if(amount >= 10){
        while(amount >= 10){
            amount -= 10
            Change[2] += 1
        }
    }
    if(amount >= 5) {
        while (amount >= 5) {
            amount -= 5
            Change[1] += 1
        }
    }
    if(amount >= 1){
        while(amount >= 1){
            amount -= 1
            Change[0] += 1
        }
    }

    return Change
}
