# Binary Search Tree


## BT vs BST

BT can have two nodes but BST needs to have all values left<current<right


## Problem

````javascript

// --- Directions
// 1) Implement the Node class to create
// a binary search tree.  The constructor
// should initialize values 'data', 'left',
// and 'right'.
// 2) Implement the 'insert' method for the
// Node class.  Insert should accept an argument
// 'data', then create an insert a new node
// at the appropriate location in the tree.
// 3) Implement the 'contains' method for the Node
// class.  Contains should accept a 'data' argument
// and return the Node in the tree with the same value.

````

## My Solution

````javascript


    insert(data) {
        if (this.data > data) {
            if (this.left === null) {
                // insert
                this.left = new Node(data);
            } else {
                this.left.insert(data);
            }
        }

        if (this.data < data) {
            if (this.right === null) {
                // insert
                this.right = new Node(data);
            } else {
                this.right.insert(data);
            }
        }
    }


   contains(data) {
        let result = null;
        if (data === this.data) {
            result = this;
        } else if (data > this.data && this.right) {
            result = this.right.contains(data);
        } else if (data < this.data && this.left) {
            result = this.left.contains(data);
        }
        return result;
    }

````

## Course Solution

Same as mine


## Conclusion

Simplify the problem and then using recursion