function isIsogram(str){
    let IsIsogram = true
    let array = str.toLowerCase().split('')
    array.forEach((el)=>{
        if(array.indexOf(el) !== array.lastIndexOf(el)) {
            IsIsogram = false
        }
    })
    return IsIsogram
}
