### Some patterns

1. Frequency counter.
2. Multiple Pointers.
3. Sliding windows.
4. Divide and conquer.
5. Dynamic Programming.
6. Greedy Algorithms.
7. Backtracking.

## Frequency counters.

This patterns uses objects or sets to collect values/Frequencies of values. This
can often avoid the need for nested loops or O(N^2) operations with
arrays/strings.


### Multiple Pointers

Creating **pointers** or values that correspond to an index or a position and
move toward the beginning end or middle based on a certain condition.

Very efficient for solving problems with minimal space complexity as well.

### Sliding Window

This pattern involves creating a windows which can either be an array or number
from one position to another. Depending on a certain condition, then window
either increases or closes(and a new windows is created)

Very useful for keeping track of a subset of data in an array/string.

### Divide and Conquer

This pattern involves dividing a data set into smaller chunks and then repeating
a process with a subset of data.

This pattern can tremendously decrease time complexity.

Example.

1. Binary Search with time complexity - Log(N)


### Recursion

Objectives

- Define what recursion is and how it can be used. 
- Understand the tow essential components of a recursive function
- Visualize the call stack to better debug and understand recursive function.
- Use helper method recursion and pure recursion to solve more difficult problems.

### What is recursion

A process (a function in our case) that calls itself. 

Recursion is everywhere. **JSON.parse and JSON.Stringfy** 

Two essential parts of a recursive functions!

1. A recursion have to have a base case or the last case.
2. Different Input


### Where things go wrong

1. If you don't have a base case, the call recursion will go forever. you will
   get max call stack exceeded.
2. The function return the wrong value. This can also lead to the max call stack
   error.
3. Forgetting to return a value at the base case. The way we pop the function
   out of the stack is by returning.

The error is called **stack overflow** which means that you recursion is not
stopping.


### Helper Method Recursion

This is a pattern that make recursion simpler.

```javascript
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
```
###  Pure Recursion Tips

1. For arrays, use methods like **slice, the spread operators,and concat** that
   make copies of arrays so you do not mutate them.
2. Remember that strings are immutable so you will need to use methods like
   **slice, substr or substring** to make copies of strings.
3. To make copies of objects use **Object.assing, or the spread operator**





  











