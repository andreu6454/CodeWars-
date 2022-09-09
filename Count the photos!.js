function countPhotos(road) {
    let count = 0, camerasCount = 0, LtoRCars = 0, RtoLCars = 0;
    road.split("").forEach(el => {
        if (el === ">") {
            LtoRCars++
        } else if (el === "<") {
            RtoLCars++
            if (camerasCount !== 0) {
                count += camerasCount
            }
        } else {
            camerasCount++;
            count += LtoRCars
        }
    })
    return count;
}
