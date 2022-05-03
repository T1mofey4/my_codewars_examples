// An isogram is a word that has no repeating letters, 
// consecutive or non-consecutive. Implement a function that 
// determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

const str = "ba";

//1

function isIsogram (str) {
    return !/(.).*\1/.test(str.toLowerCase());
}

//2

function isIsogram (str) {
    let comp = new Set(str.toLowerCase()).size != str.length;
    if (comp === true) {
        return false;
    } else {
        return true;
    }
}



console.log(isIsogram(str));