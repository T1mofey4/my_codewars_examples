// Task
// Given an integral number, determine if it's a square number:

// Examples
// -1  =>  false
//  0  =>  true
//  3  =>  false
//  4  =>  true
// 25  =>  true
// 26  =>  false



function isSquare(num) {
    const numSqrt = Math.sqrt(num);
    if (numSqrt % 1 === 0) {
        return true
    } else {
        return false
    }
}

console.log(isSquare(26))