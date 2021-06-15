/* The function accept a sorted array and a value.
 * 
 * psudocode
 *
 * Create a left pointer at the start of the array and a right pointer at the
 * end of the array.
 *
 * While the left pointer comes before the the right pointer.
 *    Creat a pointer in the middle
 *    if you find the value you want return the index
 *    if you value is too small, move the left pointer up
 *    if the value is too large move the right pointer down
 * */

const a = [1,2,3,4,5,6,7,8]
const b = [1,2,3,4,5,6,7,8]
const c = [1,2,3,4,5,6,7,8,9,10]
const d = [1,2,3,4,5,6,7,8,9,10]





// assumtion
// The array is sorted

function binarySearch( arr , val ){
   let start = 0
   let end = arr.length -1
   let middle = Math.floor((start + end) / 2)
    while(arr[middle] !== val && start <= end) {
        if(val < arr[middle]) {
            end = middle -1
        }else {
            start = middle +1
        }
        middle = Math.floor((start + end) / 2)
    }
    if(arr[middle] === val){
        return middle
    }
    return -1
}


console.log("Binary Search First Try")
console.log(binarySearch(a, 8))
console.log(binarySearch(b, 5))
console.log(binarySearch(c, 1))
console.log(binarySearch(d, 23))



function binarySearchShorter( arr , val ){
   let start = 0
   let end = arr.length -1
    while(start <= end) {
       let middle = Math.floor((start + end) / 2)
      if(arr[middle] === val) {
         return middle;
      }
        if(val < arr[middle])end = middle -1
        else start = middle +1
    }
    return -1
}

console.log("Binary Search Shorted First Try")
console.log(binarySearchShorter(a, 8))
console.log(binarySearchShorter(b, 5))
console.log(binarySearchShorter(c, 1))
console.log(binarySearchShorter(d, 23))

// Binary search is time complexity of log n
// Every time you double the element you are adding an extraa step in finding
// the value.
//
// Binary search is very fast. but its only useful for sorted data.




