/*
 Implement a funciton called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
 */

// examples
const a = countUniqueValues([1,1,1,1,1,1,2])  // 2
const b = countUniqueValues([1,2,3,4,4,4,7,12,12,13]) // 7
const c = countUniqueValues([]) // 0
const d = countUniqueValues([-2,-1,-1,0,1]) //4

console.log(a,b,c,d)

// assumptions
// solted
//
// Possible question
// Am allowed to alter the array ? if so > here a solution
// solution which you are allowed to alter the array

function countUniqueValues(arr) {
    if(arr.length === 0) return 0
    let i = 0;
    for(let j =1; j< arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++
            arr[i] = arr[j]
        }
    }
    return i+1
}


