// Complete the solution so that it returns true 
// if the first argument(string) passed in ends 
// with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false



// const str = 'abcde';
// const str2 = 'bcde';

// console.log(str.slice(-(str2.length)))

function solution(str, ending){
    if (ending.length > 0) {
        return str.slice(-(ending.length)) === ending ? true : false
    } else {
        return true
    }   
}

console.log(solution('abc', 'bc'))