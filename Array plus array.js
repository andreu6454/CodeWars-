function arrayPlusArray(arr1, arr2) {
    let count = 0
    let newArr = [...arr1,...arr2]
    newArr.forEach((el) => {count += el})
    return count
}
