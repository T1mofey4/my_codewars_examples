function fakeBin(x) {
    let s = x.toString(),
        arr = s.split(''),
        newArr = [];
    for(let i of arr){
        if(i >= 5) {
            newArr.push('1');
        } else {
            newArr.push('0');
        }
    }
    return (newArr.join(''));
}