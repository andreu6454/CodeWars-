function humanReadable(time) {
    let arr = ["00", ":", "00", ":", "00"]
    if ((time % 3600 !== 0 && time >= 3600) || time / 3600 === 1) {
        if (Math.floor(time / 3600) < 10) {
            arr[0] = "0" + Math.floor(time / 3600)
        } else {
            arr[0] = Math.floor(time / 3600)
        }
    } else if(time % 3600 === 0 && time > 3600  ){
        arr[0] = time / 3600
    }
    let newTime = time - Number(arr[0]) * 3600
    if (time % 60 !== 0) {
        if (time % 60 < 10) {
            arr[4] = "0" + time % 60
        } else {
            arr[4] = time % 60
        }
    }
    newTime = newTime - Number(arr[4])
    if (newTime / 60 < 10) {
        arr[2] = "0" + newTime / 60
    } else {
        arr[2] = newTime / 60
    }
    return arr.join("");
}
