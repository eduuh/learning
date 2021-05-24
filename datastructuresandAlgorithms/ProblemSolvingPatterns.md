### Some patterns

1. Frequncy counter.
2. Multiple Pointers.
3. Sliding windows.
4. Divide and conquer.
5. Dynamic Programming.
6. Greedy Algorithms.
7. Backtracing.

## Frequency counters.

This patterns uses objects or sets to collect values/Frequencies of values. This can often avoid the need for nested loops or O(n^2) operations with arrays/strings.

### Example
  
   Write a function called same, which accepts two arrays. The function shoud return true if every value in the arry haast it's correstponding values squared in the second. the Frequencies of values must be the same.

```javascript
same([1,2,3], [4,1,9])
same([1,2,3], [1,9])
same([1,2,9], [1,4,9])
```
