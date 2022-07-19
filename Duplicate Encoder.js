// The goal of this exercise is to convert a string to 
// a new string where each character in the new string is "(" 
// if that character appears only once in the original string, or ")" 
// if that character appears more than once in the original string. 
// Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

let word = 'CALL';


function duplicateEncode(word) {
    let newWord = word.toLowerCase().split('')
    let buf = {}; res = '';

    for (let i = 0; i < newWord.length; i++) {
        if (buf[newWord[i]] == undefined) {
            buf[newWord[i]] = 1;
        } else {
            buf[newWord[i]]++
        }
    }

    for (let a = 0; a < newWord.length; a++) {
        if (buf[newWord[a]] == 1) {
            res += '('
        } else {
            res += ')'
        }
    }
    
    return res
}

console.log(duplicateEncode(word))


// second way

// function duplicateEncode(word) {
//     let newWord = word.toLowerCase(); res = '';
//     for (let i = 0; i < newWord.length; i++) {
//         if(newWord.lastIndexOf(newWord[i]) == newWord.indexOf(newWord[i])) {
//             res += '('
//         } else {
//             res += ')'
//         }
//     }
//     return res
// }


