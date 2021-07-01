## what is Stack

A stack is a simple data structure used for storing data. The order in which the
data arrive is important.

A good examples is a pile of plates in a cafeteria. The plates are added to the
stack as they are cleaned and they are placed on the top. When a plate, is
required it is taken from the top of the stack. The first plate placed on the
stack is the last one to be used.

### Definition

A stack is an ordered list in which insertion and deletion are done at one end,
called top. The last element inserted is the first one to be deleted.

Special names are given to the two changes that can be made on a stack.

1. push -> Insertion
2. pop -> Deletion

## Stack ADT

The following are the main stack operation.

### Main Stack Operations

-   Push(int data): Insert data onto the stack.
-   int Pop(): Removes and returns the last inserted element from the stack.

### Auxiliary stack operation

-   int Top(): Returns the last inserted element without removing it.
-   int Size(): Returns the number of elements stored in the stack.
-   int IsEmptyStack():
-   int IsFullStack(): Indicates whether the stack is full or not.

### Exceptions (edge cases)

Attempting the exception of an operation may sometime cause an error condition,
called an exception. Exceptions are said to be thrown by an operation that
cannot be executed.

1. Operation such as pot and top cannot be performed is the stack is empty.
2. Attempting the execution of pop(top) on an empty stack throws an exception.
3. Trying to push an element in a full stack throws an exception.

## Application of Stacks

### Direct application

1. Balancing of symbols
2. infix-to-postfix conversions
3. Evaluation of postfix expressions
4. Implementing function calls (including recursion)
5. Finding of spans (finding snaps in stock market)
6. Page-visited history in a web browser [back buttons]
7. Undo sequence in a text editor
8. Matching Tags in HTML and XML

### Indirect application

1. Auxiliary data structures for other algorithms.
2. Components of other data structures.

## Implementation

There are many ways of implementing stack ADT

1.  Simple array based implementation
2.  Dynamic array based implementation
3.  Linked Lists implementation.

### Simple Array Implementation

We took one index variable top which points to the index of the most recently inserted element in the stack. To insert (or push) an element, we increment top index and then place then new element at that index.

Similarly to delete(or pop) an element we take the element at top index and then decrement the top index. We represent an empty queue with top value equal to -1. The issue that still needs to be resolved is what we do when all the slots in the fixed size array stack are occupied.

### Performance and Limitation

#### Performance

Let n be the number of elements in the stack. The complexities of stack
operations with this representation can be given as.

|-----------------------|-------------|----------|
| Space complexity (for n push operation) | O(n) |
| Time complexities of Push() | O(1) |
| Time complexities of Pop() | O(1) |
| Time complexities of Size() | O(1) |
| Time complexities of IsEmptyStack() | O(1) |
| Time complexities of IsFullStack() | O(1) |
| Time complexities of DeleteStack() | O(1) |

### Limitation

The maximum size of the stack must fist be defined and it cannot be changed. Trying to push a new element into a full stack cause implementation specific exceptions

## Dynamic Array Implementation

### First try: What if we increment the size of the array by 1 every time the stack is full?

    * Push() increase size of S[] by 1
    * Pop() decrease the size of s[] by 1

#### Problem with this approach

The way of incrementing the array size is too expensive. For example, at n = 1,to push an element create an new array of size 2 and copy all the old array elements to the new array, and at the end add the new element. At n = 2, to push an element create a new array of size 3 and copy all the old array elements to the new array, and at the end the new element.

If we want to push an element create a new array of size n and copy all the old array elements to the new array and at theend add the new element. After n push operations the total time is T(n) (number of copy operations) is proportional to 1+2+..+n = O(n2)

##### Alternative Approach: Repeated Doubling

Let us improve the complexity by using array doubling techinques. If the array is full, create a new array of twice the size, and copy the items. With this approach, pushing n items takes time proportinal to n (not n squaredo
)
