function productArray(numbers) {
    let totalArr = []
    for(let key in numbers){
        let tmp = 1;
        for(let i in numbers){
            i === key ? tmp *= 1 : tmp *= numbers[i]
        }
        totalArr[key] = tmp
    }
    return totalArr
}
