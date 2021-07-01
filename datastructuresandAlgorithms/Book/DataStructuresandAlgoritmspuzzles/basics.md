## Data Structures

Data Structures is a particular way of storing and organizing data in a computer so that it can be used efficently. 

Examples of Data structures.

 1. Arrays
 2. files
 3. linked lists
 4. stacks
 5. queues
 6. trees
 7. graphs

Depending on the organization of the elements, data structurse are classifiend into two types.

1. **Linear data structures** Element are accessed in a sequencial order but it is not compulsory to store all elments sequentially. Examples are **Linked lists** , **stacks** and **Queues**
2. **Non-Linear data structures** Elements of this data structurs are stored/accessed in a non-linear order. **Trees and Graphs**

Data structures are usuall combined with their operations and we call this **Abstract Data Types(ADTs)** An ADT consists of two parts.

1. Declaration of data.
2. Declaration of operation.

Commonly used Adts includes: Linke lists, stacks , queus, Priority queus,  Binary Trees , Dictionaries, Disjoint Sets (Union and Find), Hast Tables, Grapsh, and many others.

NOTE: You shoul be albe to relate data structurse wht the kind of problem they solve.

### Algorithms?

An algorithm is the **step by step** unambigous instructions to solve a given problem.

### Why The Analysis of Algorithms?

To go from city "A"  to city "B", ther can be many ways to accomplisheing this: by flight, by bus, by train and also by bicycle. Depending on the availability and convenience, we choose the one that suits us. Simlarly, in computer science, multiple algorithms are available for solving the same problem. Algorithm analysis helps us to determine which algorithm is most efficent in terms of time and space consumed.

### Goals of Analysis of Algorithms.

The goal of the analysis of algorithms is to compare algorithms (or solutions) mainly in temrs of running time but also in tems o other factors (memory , developer efforts)

### What is Running Time Analysis?

It is the process of determining how processing time increses as the size of the problem (input size) increases. Input size is the number of elements in the input and depending on the problem type, the input may be of different types. The followind are the common types of inputs.

1. Size of array.
2. Polynomial degree.
3. Number of elements in a matrix
4. Number of bits in the binary repersentaiton of the input.
5. Vertices and edges in a graph.

## How to compare algorithms.

To compare algorithms, here are some few objective measures:

1. **Executiont times** ? Not a good masure as exectyont time are specific to a particular computer.
2. **Number of statement exucuted?** Not a good measure, since the number fo statements varies with the programming languages as well as the style of the indivual programmer.
3. **Ideal solution?** Let us asusme that we express the running time of a given algorithm as a function of the input size n and compared thes different function coresponding to running times. This kind of comparison is independent of machine time or programming styne.


### what is Rate of Growth?

The rate at which the running time increases as a sunction of input is called **rate of growth**. 

     Total cost = cost of car  + cost of bicycle
     Total Cost = cost of car(approximation)

### Commonly Rate of growth


| Time Complexity | Name  | Example |
|-----------------|-------|---------
| 1 | Const   | Adding an element to the front of a linked list |
| logn | Logarithmic | Find an element in a sorted array |
| n | Linear | Finding an element in an unsorted array |
| nlogn | Linear Logarithmic | Sorting n items by "divide and conquer" Merge sort |
| n@  






