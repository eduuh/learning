A tree is hirachical data structure
A tree have a root node(parent) and its child, leaf and sibling
A root node can contain other root nodes with their children
A tree have a root node, and every child comes from only one parents

Example of a tree datastructure is the **dom document**
Family tree can be represent in a tree datastructures.
The abstract syntax tree is another example.

The beauty of tree is we use the same concept as linked list. This have a node. Linked list
is a type of tree with a single path.
There are very many types of trees.

The main types of trees that mostly used are

1. Binary Trees

#### Binary Tree

These is a type of tree with some rules
Each node can only have only 1 or 2 children
Each child have only one parent

```javascript
function BinaryTreeNode(value) {
  this.value = value
  this.left = null
  this.right = null
}
```

### Terminology

1. Perfect Binary Tree
2. Full Binary Tree

#### Binay Search Tree

Lookup _> o(log n)
insert -> o(log n)
delete _> o(log n)

#### O(log n)

Level 0: 2^0 = 1;
Level 1: 2^1 = 2;
Level 2: 2^2 = 4;
Level 3: 2^3 = 8;

#number of nodes = 2 ^ steps - 1
log nodes = steps

log 100 = 2
10^2 = 100

### Divide and Conquer

We check the node based on a criteria. We dont have to check all the elements

### Why is a binary search tree better than a hasttable?

The most common data structure. A binary search tree are really good for searching. This
data structure preserves relatioships .

###

Rules

1. all the children to the right of the parent node increases. and to the left the value
   decreases.
2.

### probles of Binary trees

1. Balanced vs Unbalanced

Lookup on
Acces
Insert

### BST Pro and Cons

1. Better than O(n)
2. Ordered
3. Flexible size
4. No (1) operations (cons)
   - we usuall have to do some traversal in tree
