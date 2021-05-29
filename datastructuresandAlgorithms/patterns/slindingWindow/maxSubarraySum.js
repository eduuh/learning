/*
 *Write a function called maxSubarray sum which accepts an array of intergers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
  */

//examples
const a = maxSubArraySum([1,2,3,5,2,8,1,5],2)//10
const b = maxSubArraySum([1,2,5,2,8,1,5], 4) // 17
const c = maxSubArraySum([1,2,5,2,8,1,5],4)// 6
const d= maxSubArraySum([4,2,1,6,2], 4)// 13
const e = maxSubArraySum([],4) //null

console.log(a,b,c,d,e)

//Naive solution. Not the best solution for the problem.
// let consider we have a million items
// We need to add every 10,000 items
// The nested loop becomes a proble.
function maxSubArraySumNaive(arr, num) {
    if(num > arr.length) {
        return null
    }

    var max = -Infinity
    for(let i =0; i < arr.length - num + 1; i++) {
        temp = 0
        for(let j =0; j< num; j++) {
            temp +=arr[i+j]
        }

        if(temp > max) {
            max = temp
        }
    }
    return max
}

// from the nested loop solution. We are recalculating the sum, bu we dont have
// to, we could just slide the sum over.
// Time complexity of this solution is O(N)
function maxSubArraySum(arr,num){
    let maxSum = 0
    let tempSum = 0
    if(arr.length < num) return null
    for(let i=0; i< num; i++){
        maxSum +=arr[i]
    }
    tempSum = maxSum;
    for(let i = num; i < arr.length; i++){
        tempSum = tempSum - arr[i-num] + arr[i]
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
}

