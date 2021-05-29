//write a function that accept an array and a value
function LinearSearch(array, value) {
    for(let i =0; i< array.length; i++){
        if(array[i] === value){
            return i
        }
    }
    return -1
}

console.log( LinearSearch([1,2,3,4,5,6],6))
