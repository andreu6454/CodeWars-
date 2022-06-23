function stairsIn20(s){
    let count = 0;
    for(let key in s){
        for(let key2 =0; key2 < 52; key2++){
            count += s[key][key2]
        }
    }
    let twentyYearsCount = count * 20
    return twentyYearsCount
}
