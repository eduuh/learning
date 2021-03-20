class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    if (!value) {
      throw "No value"
    }
    const node = new Node(value)

    if (this.root == null) {
      this.root = node
    } else {
      let currentNode = this.root
      while (true) {
        if (value < currentNode.value) {
          //left
          if (!currentNode.left) {
            currentNode.left = node
            return this
          }
          currentNode = currentNode.left
        } else {
          //right
          if (!currentNode.right) {
            currentNode.right = node
            return this
          }
          currentNode = currentNode.right
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false
    }

    let currentNode = this.root
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left
      } else if (value > currentNode.value) {
        currentNode = currentNode.right
      } else if (currentNode.value == value) {
        return currentNode
      }
    }
    return false
  }

  traverse(node) {
    const tree = node
    tree.left = node.left === null ? null : traverse(node.left)
    tree.right = node.right === null ? null : traverse(node.right)
    return tree
  }
}

const tree = new BinarySearchTree()
tree.insert(2)
tree.insert(3)
tree.insert(5)
tree.insert(10)
tree.insert(1)

console.log(JSON.stringify(tree))
console.log(tree.lookup(2))
