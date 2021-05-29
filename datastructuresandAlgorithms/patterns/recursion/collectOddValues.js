function collectOddValues(arr) {
   let result = []

    function helper(helperInput) {
        let length = helperInput.length
       if( length === 0){
            return;
        }
        if(helperInput[length-1] % 2 !== 0) {
            result.push(helperInput[length-1])
        }

        helperInput.pop()
        helper(helperInput)
    }
   
    helper(arr)
    return result;
}

console.log(
    collectOddValues([1,3,4,5,6,6,6,4,45,32,23,23,34,54,23,54,653])
)


/// pure recursive function

