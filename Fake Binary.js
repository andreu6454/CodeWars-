function fakeBin(x) {
    let tmp
    let array = []
    for (let key in x) {
        tmp = x[key]/1
        array[key] = tmp < 5 ? 0 : 1;
    }
    return array.join("")
}
