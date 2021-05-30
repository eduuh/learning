### What is sorting

Sorting is the process of rearranging the items in a collection (e.g an array) so that the items are in some kind of order.

1. Sorting numbers from smallest to largest.
2. Sorting names alphabetically
3. Sorting movies based on release year.
4. Sorting movies based on characters.

```javascript
function sort(arr) {
  
}

sort([23,45,67,12,13])
```

### Why sort stuff

Sorting is an incredibly common task, so it's goo to know how it works. There are many different ways to sort things, and different techniques have their own advantages and disadvantages.

### Objectives.

1. Implement bubble sort
2. Implement selection sort
3. Implement insertion sort.

Understand why it is import to learn these sorting algorithms.

JavaScript have a sort method. The sort method does not work as we expect.

### Telling JavaScript how to sort.

The build in sort method accepts an optional comparator function. You can use this comparator function to tell JavaScript how you want to sort.

The comparator looks at pairs of elements (a and b), determines their sort order based on the return value.

1. if it returns  a negative number, a should come before b
2. if it returns a positive number , a should come after b

```javascript
function numberCompare(num1, num2) {
  return num1 - num2
}
[6 ,4 15 , 10].sort(numberCompare)
```
Sorting by the length of the string. We can use a comparator function.

```javascript
function compareByLength(str1, str2) {
  return str2.length - str2.length;
}

["Steele", "Colt", "Data structures"].sort(compareByLength)
```

### Bubble Sort

A sorting algorithm where the largest values bubbles up to the top!

### Before we sort, we must Swap!

many sorting algorithms involves some type of swapping functionality (e.g. swapping to numbers to put them in order)

```javascript
function swap(arr, idx1, indx2) {
  var temp = arr[indx1]
  arr[indx1] = arr[indx2]
  arr[indx2] = temp
}


function swap = (arr, idx1, idx2) => {
   [arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]]
}
```

### Bubble Sort Pseudo code

1. start looping from with a variable called I the end of the array towards the
   beginning.
2. start an inner loop with a variable called J from the beginning until I-1
3. if arr[J] is greater than arr[J+1], swap those two values!
4. Return the sorted aray.
