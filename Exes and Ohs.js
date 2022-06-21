function XO(str) {
    str = str.toLowerCase()
    let countx = 0
    let county = 0
    for(let key in str){
        if(str[key] === 'x'){
            countx++
        }
        if(str[key] === 'o'){
            county++
        }
    }
        if (countx === county){
            return true
        } else return false
}
