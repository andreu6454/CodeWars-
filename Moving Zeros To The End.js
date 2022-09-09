function moveZeros(arr) {
    let count = 0
    arr.map(el => el === 0? count++ : el)
    let tmp = arr.filter(el => el !== 0 )
    let finalArr = []
    for (let key = 0; key < count; key++){
        finalArr = [...finalArr, 0]
    }
    return [...tmp,...finalArr]
}
