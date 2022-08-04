function switcheroo(x){
    let array = []
    for(let key = 0; key < x.length; key++){
        if(x[key]==="a"){
            array[key] = "b"
        } else if(x[key]==="b"){
            array[key] = "a"
        } else {
            array[key] = "c"
        }
    }
    return array.join("")
}
