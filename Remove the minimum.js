function removeSmallest(numbers) {
    let array = []
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i] === Math.min(...numbers)){
            for (let j = i + 1; j < numbers.length; j++){
                console.log(j)
                array.push(numbers[j])
            }
            return array
        } else  {
            array.push(numbers[i])
        }
    }
    return array;
}
