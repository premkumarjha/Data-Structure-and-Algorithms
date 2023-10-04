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
    if (root?.left == null && root.right == null) {
      return 1;
    }
    let leftSum = this.sumNode(root?.left);
    let rightSum = this.sumNode(root?.right);
    return leftSum + rightSum + 1;
  }
}
