//Given two strings, write a function to determin of the second string is an
//anagram of the first. An anagram is a word , phrase, or name formeb by
//arearragint the letters, cush as cinema, formed from iceman.


// exprole concrete examples

console.log(
    validAnagram(" ", " ") // true
)

console.log(
    validAnagram("aaz", "aaz") // true
)
console.log(
    validAnagram("anagram", "nagaram") // true
)

console.log(
    validAnagram("rat", "cat") // false
)
console.log(
    validAnagram('awesome', 'awesom') // false
)
console.log(
    validAnagram('qwerty', 'qeywrt') // true
)


// break it down
// { q: 0 , w: 0 , e: 0, r: 0, t: 1 ,y: 0 }
//
validAnagram('qwerty', 'qeywru') // true

// Assumptions 
// There are all strings
// there are all lowercase letters.
//

function validAnagram(string1, string2) {
    if(string1.lenght !== string2.lenght) return false

    let lookup = {}

    for(let letter of string1) {
        lookup[letter] = (lookup[letter] || 0) + 1
    }

    for(let letter of string2) {
        if(!lookup[letter]) {
            return false
        } else {
            lookup[letter] -=1
        }
    }
  return true
}




