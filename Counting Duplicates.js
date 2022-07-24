// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive 
// alphabetic characters and numeric digits that occur more than once in the input string. 
// The input string can be assumed to contain only alphabets (both uppercase and lowercase) 
// and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const str = "ABBA";

function duplicateCount(string) {
     
    let arr = [];
        newStr = string.toLowerCase();
        buf = {};
        
        for (let i = 0; i < newStr.length; i++) {
            arr.push(newStr[i])
        }
        
        for (let a = 0; a < newStr.length; a++) {
            if (buf[newStr[a]] == undefined) {
                buf[newStr[a]] = 1;
            } else {
                buf[newStr[a]]++
            }
        }
        

        const count = Object.values(buf);
        let out = [];

        
        for (let b = 0; b < count.length; b++) {
            if (count[b] >= 2) {
                out.push(count[b])
            }
        }

        return out.length
        
}

console.log(counting(str))
