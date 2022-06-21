function printerError(s) {
    let errors = 0;
    const good = 'abcdefghijklm'
    const bad = 'nopqrstuvwxyz'
    for(let key in s){
        for(let num in bad) {
            if (s[key] === bad[num]){
                errors++;
            }
        }
    }
    return  `${errors}/${s.length}`
}
