//Write a function which takes in a string and returns counts of each character in the string.

// Undertand the concept.
//=== Start with some concret examples ===
console.log(charCount("aaa")) // {a: 4}
console.log(charCount("hello")) // {h: 1, e: 1, l: 2, o: 1}
console.log(charCount("My Phone Number is 232323"))

/*
  {
    "2": 3,
    "3": 3,
    m: 1,
    y: 1,
    p: 1,
    h: 1,
    o: 1,
    n: 2,
    m: 1,
    b: 1,
    e: 1,
    r: 1,
    i: 1,
    s: 1,
  }
 * */

// more examples with edges cases
// "my phone Number is 232323"     // has caps
// "Hello hi"    // what about spaces

// charCount("")  > what do we return? null? undefined? or and empty object

//=== Breaking down the Problem.===
function charCount(str) {
  // Do something
  // return an object with keys that are lowercase alphanumeric characters in the string;
}

function charCount(str) {
  // make object to return at end.
  var result = {}
  // Loop over the string, for each character ...
  for (var i = 0; i < str.length; i++) {
    var char = str[i].toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1)
    }
  }
  // if the char is a number/letter AND is a key in the object, add on to count
  // if the char is a number/Letter AND not in object, and key, add it to the object set value to 1
  // if character is something else (space, period, etc) don't do anything
  // return object at end.
  return result
}

//** Solve/Simplify **
//Try to ingnore the part that give you a a hard work.
// you could ignore the alphanumeric part. as the interviewer for suggesting to check what
// to use to check for alphanumerics.
//
//
// ** Refactor the code
// refactore the if else statement to a operation.
// result[char] > 0 ? result[char]++ : (result[char] = 1)
//
//
// improving the aethetics of the code you could use a for of loop
function charCount(str) {
  // make object to return at end.
  var result = {}
  // Loop over the string, for each character ...
  for (var char in str) {
    var char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      result[char] > 0 ? result[char]++ : (result[char] = 1)
    }
  }
  // if the char is a number/letter AND is a key in the object, add on to count
  // if the char is a number/Letter AND not in object, and key, add it to the object set value to 1
  // if character is something else (space, period, etc) don't do anything
  // return object at end.
  return result
}

// we can also imporve the check code
// result[char] > 0 ? result[char]++ : (result[char] = 1)
// result[char] = ++result[char] || 1
//
// The code can now be

function charCount(str) {
  // make object to return at end.
  var result = {}
  // Loop over the string, for each character ...
  for (var char in str) {
    var char = char.toLowerCase()
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1
    }
  }
  // if the char is a number/letter AND is a key in the object, add on to count
  // if the char is a number/Letter AND not in object, and key, add it to the object set value to 1
  // if character is something else (space, period, etc) don't do anything
  // return object at end.
  return result
}

function isAlphaNumeric(char) {
  var code = char.charCodeAt(0)
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper case range (A-Z)
    !(code > 96 && code < 123) // Lower case alpha (a-z)
  ) {
    return false
  }
}

// refactoring using the isAlphaNumeric
function charCount(str) {
  var char = str.toLowerCase()
  if (isAlphaNumeric(char)) {
    char = char.toLowerCase()
    obj[char] = ++obj[char] || 1
  }
}
