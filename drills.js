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

// function heightOfBST(t) {
//   let height = 0;
//   height++;

//   if (t.tree === null) {
//     height--;
//   }
//   if(t.right !== null){
//     heightOfBST(t.right);
//   }
//   // else if(t.left !==null){
//   //   heightOfBST(t.left);
//   // }
//   console.log(height);
//   return height;
// }



// function hightFromTicks(ticks){
//   console.log(ticks.length);
// }



// input = tree (3,1,4,6,9,2,5,7)
// output = height of tree, 5

// check for root if there is root set height to 1
// if there is a left child height +1
// else if there is a right child +1
// if left and right child === null return height. 

function heightOfBST(bst){
  let node = bst.parent;
  let height = 0;
  while (node !== null){
    if(bst.left){
      height += 1;
      node = bst.left;
    }
  }
  return height;
}

console.log(heightOfBST(nums));