/*
 * Write a function with recursion
 * */

function countDown(num) {
    if(num <= 0){
        console.log("All done")
        return
    }

    console.log(num)
    num--
    countDown(num)
}

countDown(3)

// Call Stack Game
// print 3
// countDown(2)
// print2
// conntDown(1)
// print 1
// print All down

function sumRange(num) {
    if(num ===1) return 1
    return num + sumRange(num-1)
}

console.log(sumRange(3))
// return 3 + sumRange(2) => 3 + 3 => 6
//  2 + sumRange(1)    =>  2 + 1
//                         // return 1

/// non recursive solution of factoria
function factiorial(num) {
    let total = 1;
    for(let i = num; i > 1; i--){
        total *=i
    }
    return total
}

function Factorial(num){
    if(num === 1) return 1
    return num * Factorial(num-1)
}

console.log("Factorial ...............")
console.log(
    Factorial(4)
)

