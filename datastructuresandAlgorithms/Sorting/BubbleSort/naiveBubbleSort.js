function bubbleSort(arr){
    for(var i =0; i < arr.length; i++) {
        for(var j =0; j < arr.length; j++){
            console.log(arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// my optimize version
function bubbleSortOptimized(arr){
    for(var i =0; i < arr.length; i++) {
        for(var j =0; j < arr.length - i; j++){
            console.log(arr[j], arr[j+1])
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}

// psudocode solution

function bubbleSortPsudocode(arr) {
    for (var i = arr.length; i > 0 ; i--){
        for(var j = 0; j< i-1; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
    return arr
}


// better solution
//

function bubbleSortbetter(arr) {
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(var i = arr.length; i> 0; i--) {
        for(var j =0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
                
            }
        }
    }
    return arr
}
const sorted = bubbleSortbetter([37,45,29,8])
console.log(sorted)

// The code below we keep goin to the end with no swap happening.
// We can make some short circuit to get out of the swap.

function bubbleSortOptimized(arr) {
    var noswaps;
    function swap(arr, idx1, idx2) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
    }

    for(var i = arr.length; i> 0; i--) {
        noSwaps = true
        for(var j =0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                swap(arr,j,j+1)
            }
        }
    }
    return arr
}
const sortedoptimized = bubbleSortOptimized([37,45,29,8])
console.log(sortedoptimized)

