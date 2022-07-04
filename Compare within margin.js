function closeCompare(a, b, margin = 0){
    if(a - b >= -margin && a - b <= margin){
        return 0
    }
    else if (a - b > 0){
        return 1
    }
    else{
        return -1
    }
}
