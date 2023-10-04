//PREDECESSOR (LRRRRRR..)->one left and than move right right right
//successor ->one Right and left left left left.......
////complete tree->all level filled , except last and last left se fill hona..
//trees index start from zero..
//tree ko aaray me change->if parent at i ->child 2i+1,2i+2.  if child i, parent (i-1)/2
//https://www.youtube.com/watch?v=rukYFD8cYBY  //->predessor and find node.

//heap and priority queue =>https://anmolsehgal.medium.com/heap-vs-priority-queues-vs-queues-b03398312c87
// binary heap and priority queue=>https://www.geeksforgeeks.org/priority-queue-using-binary-heap/

//Bst->each node ke left me wo node data se less and right me wo node s bada value hota.

//1.>count leaf node
//2.>count total node
//3.>check tree is BST or not
//4.>height of binary tree
//5.>check tree is identical pr not
//6.>LCA {lowest common ansector)}
//7.>sum of node
//8.>Zig Zag traversal
//9.>print node and label of a tree using map and recursion and also try by lavel order.
//10.>left /Right view of tree
//11.>Quadtree ->just theory
//12.>path sum
//13.>width of tree
//14.>diameter of binary tree
//15.>symetric tree
//16.>All Nodes Distance K in Binary Tree
//16.>--->traversal and search and insert problems.

//=======================================================================================>Now try below Questions...

//insert/create
//traverse
//search
//BFS AND DFS ->search
//6.>delete ->0 child, 1 child, 2 child;
//AVL tree , red black tree ->just need to understand
//Morris Traversal algorithm
//7.>Trie   //Binary tries   --->problems ....
//8.>Heap/priority queu
//9.union and find algorithm

// Node class
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

// Binary Search tree class
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  //in bst me left sside chota and right side bada, to even insert and delete me bhye rule maintin rakahna , let need add 7 so first compare with root ki 7 root se chota orb bada..
  insertNode(root, val) {
    if (root == null) {
      const root = new Node(val);
      return root;
    }
    if (val < root.data) {
      root.left = this.insertNode(root.left, val);
    } else if (val > root.data) {
      root.right = this.insertNode(root.right, val);
    }
    return root;
  }

  // A utility function to
  // do inorder traversal of BST
  inorderRec(root) {
    if (root != null) {
      inorderRec(root.left);
      console.log(root.data + "<br/>");
      inorderRec(root.right);
    }
  }
  inorder() {
    this.inorderRec(this.root);
  }

  //1.>count leaf node  + sum of leaf node
  countLeafNode(root) {
    if (root == null) return 0;
    if (root.left == null && root.right == null) {
      return 1;
    }
    console.log("root left", root.left);
    let leftSum = this.countLeafNode(root.left);
    let rightSum = this.countLeafNode(root.right);
    let name = "prem";

    return leftSum + rightSum;
  }
  //9.>print node and label of a tree using map and recursion and also try by lavel order.
  printNodeAndLevel(root, level) {
    if (root == null) {
      return;
    }
    console.log("level->", level, "node-->", root.data);
    this.printNodeAndLevel(root.left, level + 1);
    this.printNodeAndLevel(root.right, level + 1);
  }

  //7.>sum of node

  sumNode(root) {
    // if(root === null ) {
    //     return 0
    // }
    if (root?.left == null && root?.right == null) {
      return root?.data;
    }
    if (root === null) return 0;
    let leftSum = this.sumNode(root?.left);
    let rightSum = this.sumNode(root?.right);
    let sum = leftSum + rightSum + root?.data; //if sum of leaf node bolega to sirf leftSum+rightSum;
    return sum;
  }
  levelOrder(root) {
    if (root == null) return;
    var queue = [];
    var leveldata = [];
    queue.push(root);
    queue.push(null);

    while (queue.length != 0) {
      var n = queue.shift();
      n !== null && leveldata.push(n.data);
      // if (n == null) {
      //   console.log(...leveldata);          //ye line to print node level wise and each level new line pe...                        
      //   if (queue.length == 0) {
      //     break;
      //   }
      //   queue.push(null);

      //  leveldata = [];      null 8 12
      //   continue;
      // }

      n !== null && console.log(n?.data);   //ye line only tab jb level wise print nahi karna ho, else remove this line

      if (n?.left != null) {
        queue.push(n.left);
        // leveldata=[]
      }
      if (n?.right != null) {
        queue.push(n.right);

        // leveldata=[]
      }
    
    }
  }
}

const root = new Node(15);
root.left = new Node(10);
root.right = new Node(20);
root.left.left = new Node(8);
root.left.right = new Node(12);
root.right.left = new Node(16);
root.right.right = new Node(25);

// var root = new Node(1);
//     root.left = new Node(2);
//     root.right = new Node(3);
//     root.left.left = new Node(4);
//     root.left.right = new Node(5);
//     root.right.left = new Node(16);
//     root.right.right = new Node(25);

// var root = new Node(3);
//     root.left = new Node(9);
//     root.right = new Node(20);
//     root.right.left = new Node(15);
//     root.right.right = new Node(7);


const bst = new BinarySearchTree();
//bst.insertNode(50);
//bst.insertNode(30);
//bst.insertNode(20);
//bst.insertNode(40);
///bst.insertNode(70);
//bst.insertNode(60);
//bst.insertNode(80);
//bst.inorder();

//const result=bst.countLeafNode(root);
//bst.printNodeAndLevel(root,1);
bst.levelOrder(root);

//const result =bst.sumNode(root);
//console.log('result=>',result)
//1.>count leaf node  + sum of leaf node

//2.>count total no of node

//NOTE=========>>>>>return means we recursion call  stack se hat jayega and jo return of recursion kiya wo result just niche stacck ko transfer hoga...= recusion sereturn mil gya than wo wala recursion  stack se remove and next lines of code execute..

//3.>check tree is BST or not

//4.>height of binary tree  //https://www.youtube.com/watch?v=nHMQ33LZ6oA&list=PLDzeHZWIZsTo87y1ytEAqp7wYlEP3nner&index=2

//5.>check tree is identical pr not

//6.>LCA {lowest common ansector)}  //https://www.youtube.com/watch?v=QG0hE0R_ng4&t=7s

//7.>sum of node

//8.>Zig Zag traversal  //before it check lavel order + sir ne map + normal recursion se bhi..check all..

//9.>print node and label of a tree using map and recursion and also try by lavel order.

//==>done above.

//10.>left /Right

//10.1>top and bottom view view of tree  //babar

//11.>Quadtree ->just theory
//12.>path sum
//.>Balanced Tree or Not  ->babar
//.>Sum Tree or Not  ->babar
//13.>width of tree
//14.>diameter of binary tree
//15.>symetric tree
//16.>All Nodes Distance K in Binary Tree
//17.>union and find algorithm
//18>--->traversal and search and insert problems.
