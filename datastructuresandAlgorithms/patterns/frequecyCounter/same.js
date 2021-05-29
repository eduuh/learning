console.log(
    same([1,2,3], [4,1,9])  // true
)

console.log(
    same([1,2,3], [1,9])  // false
)

console.log(
    same([1,2,3], [1,4,9])  // true
)

console.log(
    same([1,3,9], [1,4,9])  // false
)


// two nested loops: naive solution.
// nested loops. for 30,000 elements.
// 30,000 * 30,000 interation => 900,000,000 iterations

function same1(arr1, arr2) {
     // naive solution
  if(arr1.length !== arr2.length) return false

    for(let i = 0; i < arr1.lenght; i++) {
        let correctindex = arr2.indexOf(arr1[i] ** 2)
        if(correctIndex === -1){
            return false
        }
        arr2.splice(correctindex, 1)
    }
  return true
}

// two loops are better than two nested loops. 
// The time complexity becomes o(n)
// 3 loops > let consider 30,000 elements we have 3 * 30,000
// We have 90,000 iteration

function same(arr1, arr2) {
    if(arr1.length !== arr2.length) return false

    let frequecycounter1 = {}
    let frequecycounter2 = {}

    for(let val of arr1) {
        frequecycounter1[val] = (frequecycounter1[val] || 0) + 1
    }

    for(let val of arr2) {
        frequecycounter2[val] = (frequecycounter2[val] || 0) + 1
    }

    //console.log(frequecycounter1)
    //console.log(frequecycounter2)

    for(let key in frequecycounter1) {
        if(!(key**2 in frequecycounter2)) {
            return false
        }

      if(frequecycounter2[key**2] !== frequecycounter1[key]) {
        return false
    }

    }

    return true
}

