// suppose you want to cout the number of times a smaller string appears in a longer string
// A straingt forward approch involves checking for pairs.

// example
// "harold said haha in hamburg"

// Long String                          short string
// wowomgzomg                               omg
//
// pseudocode
// Difine a fnction that takes in two strings
// Loop over the longer string
// Loop over the shorter string
// if the character don't match, break out of the inner loop
// if the character do match, keep goind
// if you complet the innner loop and find a match increament the cout of matches
// return the count

function searchNaiveString(long, short){
    var count = 0
    for(var i =0; i < long.length; i++){
        for(var j = 0; j < short.length; j++) {
            if(short[j] !==long[i+j]) break;
            if(j == short.length - 1) count++
        }
    }
    return count
}

const a = searchNaiveString('lorie loled', 'lol')
console.log(a)
