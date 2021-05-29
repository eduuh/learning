/*
 *Write a function called sumZero which accept a sorted array of intergers. The functions should find the first pair where the  sum is 0. Return should find the first paire where the sume is zero or undefined if a pair does not exist
 */

// Examples
const a = sumZero([-4,-2,-1,0,1,2,3]) // [-3,3]
const b = sumZero([-2,0,1,3]) // undefined
const c = sumZero([1,2,3])

console.log(a, b, c)

// assumptions
// The values are sorted
// The Naive solution
// The complexity of this solution is quadratic time.
// If we have 30,000 elements we would have 
// 30000 * 30000 iterations => 900,000,000 iterations O(n*2)
function sumZeroNaive(arr) {
    for(let i =0; i < arr.length; i++) {
        for(let j= i+1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0) {
                return [arr[i], arr[j]]
            }
        }
    }
}


// using multiple pointers: breaking the  solution down
//  have two pointers. from first and last position
//  if sum of values at the pointers equal zero return the values as an array
//  if answer is - negative, increment the first pointer.
//  if answer is + positive, decrement the last pointer.
//  add the values of the pointers
//
//  if we have 30,000 items
//  since we have one loop we have a solution like half the items
//  The time complexity is O(N)
//  Space complexity is O(1)

function sumZero(arr) {
     let first = 0
     let last = arr.length -1
    while(first < last) {
        let sum = arr[first] + arr[last]
        if( sum === 0) return [arr[first] ,arr[first]]
         sum < 0 ? first++ : last--
    }
}


// Other peoples Solutions



