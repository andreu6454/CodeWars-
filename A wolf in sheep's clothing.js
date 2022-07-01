function warnTheSheep(queue) {
    queue = queue.reverse()
    let count = 1
    if(queue[0]==='wolf'){
        return "Pls go away and stop eating my sheep"
    } else {
        while(queue[count]!=='wolf'){
            count++
        }
        return `Oi! Sheep number ${count}! You are about to be eaten by a wolf!`
    }
}
