function toCamelCase(str) {
    let newStr
    if (str.includes("-")) {
        newStr = str.split("-")
    } else newStr = str.split("_")
    let string = []
    for (let key2 in newStr[0]) {
        string[key2] = newStr[0][key2]
    }
    let count = 0
    for (let key = 1; key < newStr.length; key++) {
        for (let key2 in newStr[key]) {
            if (key2 == 0) {
                string[newStr[0].length + count] = newStr[key][key2].toUpperCase()
                count++

            } else {
                string[newStr[0].length + count] = newStr[key][key2]
                count++
            }
        }
    }
    return string.join("")
}
