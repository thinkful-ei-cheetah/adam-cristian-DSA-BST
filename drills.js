'use strict';
const BST = require('./BinarySearchTree');

function main() {

  // 1. a) the result is the same as our drawn bst
  const nums = new BST(3);
  nums.insert(1);
  nums.insert(4);
  nums.insert(6);
  nums.insert(9);
  nums.insert(2);
  nums.insert(5);
  nums.insert(7);

  //1. b) result is same. 
  const letters = new BST('E');
  letters.insert('A');
  letters.insert('S');
  letters.insert('Y');
  letters.insert('Q');
  letters.insert('U');
  letters.insert('E');
  letters.insert('S');
  letters.insert('T');
  letters.insert('I');
  letters.insert('O');
  letters.insert('N', 'N');


  // return console.log(tree(nums))
}

// main();

// 2. function tree(t) would return the sum of all of the values of a given tree. the runtime of this algorithm would be o(n^2) because it would check the value of each node until u return null. 

const nums = new BST(3);
nums.insert(1);
nums.insert(4);
nums.insert(6);
nums.insert(9);
nums.insert(2);
nums.insert(5);
nums.insert(7);

function tree(t) {

  if (!t) {
    return 0;
  }

  return tree(t.left) + t.value + tree(t.right);
}

tree(nums);

// Height of a BST

function heightOfBST(t) {
  let leftHeight = 0;
  let rightHeight = 0;

  if (t == null) {
    return 0;
  }

  if(t.right !== null){
    rightHeight = heightOfBST(t.right);
  }

  if(t.left !== null){
    leftHeight = heightOfBST(t.left);
  }

  if (!t.left && !t.right) {
    return 1
  }

  return Math.max(leftHeight, rightHeight) + 1
}

console.log(heightOfBST(nums));

// is it a BST ? 

// input = 3
//         /\
//        1   5
//         \  /\
//          2 4 7
// output = true
// input = 3
//         /\
//        1   5
//       /    /\
//      2    7  4
// output = false

// check if theres anything in t 
// check t.left is > parent false
// t.right < parent false
// otherwise check t.right and t.left's children

function bstCheck(t) {
  // if (t == null) {
  //   console.log(t)
  //   return false;
  // }
  if (t.left !== null) {
    if (t.parent < t.left) {
      return false;
    }

    bstCheck(t.left)
  }
  
  if (t.right !== null) {
    if (t.parent > t.right) {
      return false;
    }

    bstCheck(t.right)
  }

  // if (!t.left && !t.right) {
  //   return true;
  // }

  return true;
}

// console.log(bstCheck(nums))