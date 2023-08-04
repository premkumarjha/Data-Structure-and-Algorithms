//1.>insert ->first + last + nth position   //https://www.youtube.com/watch?v=oAja8-Ulz6o&t=2110s

class Node {
  ////node is just tink like single node linklist will form from joining many nodes...
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null; //head null means empty linklist, default value null liya head ka.
  }
  insertAtBegning(data) {
    let newNode = new Node(data);

    if (this.head == null) {
      this.head = newNode; //as linklist empty, so created a node and usko head bana dena hai, q ki aur yo node hai nahi jis se usko attach kar sake.
      return;
    }

    newNode.next = this.head; //head bhi ak address hai, head ka next means head ka next wala element, jo ki hame yaha no need, head likha means head ka address;
    this.head = newNode;
    return newNode;
  }

  insertAtLast(data) {
    let newNode = new Node(data);
    if (this.head == null) {
      //if list is empty
      this.head = newNode;
      return; //this line might be worng check and google..
    }

    let currNode = this.head;
    while (currNode.next != null) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    return newNode;
  }

  insertAtNthIndex(value, n) {
    let currNode = this.head;
    let index = 0;                //index 1 lenge to answer uske hisab se aayega...and zero lenge to uske hisab se aayega...,if i lete to 1,2 count karo, if index 0 then count like 0,1,2
    while (currNode != null && index != n-1) {
      currNode = currNode.next;
      index++;
    }
    let newNode = new Node(value);
    newNode.next = currNode.next;
    currNode.next = newNode;
    //return newNode;
  }

  //2.>find/search node/get at index

  findNodeAtIndex(index) {
    let currNode = this.head;
    let count = 0;
    while (currNode !== null) {
      if (count == index) {
        console.log("data===>", currNode.data);
      }
      count++;
      currNode = currNode.next;
    }
  }
  //serching a data ,present or not...
  isDataPresent(value) {
    let currNode = this.head;
    let count = 0;
    while (currNode !== null) {
      if (currNode.data == value) {
        console.log("data found");
      }
      count++;
      currNode = currNode.next;
    }
  }

  //3.>delete first + last + nth position + delete given node.

  deleteFirst() {
    //let currNode=this.head;  //no need as here traverse thode karna hai
    if (this.head == null) {
      console.log("list is empty");
      return;
    } else {
      this.head = this.head.next;
    }
    return this.head;
  }

  deleteLast() {
    let currNode = this.head;
    if (this.head == null) {
      //jab empty ho
      console.log("list is empty");
      return;
    }
    if (this.head.next == null) {
      //jab ak hi node hai
      this.head = null;
    }
    if (this.head !== null) {
      while (currNode.next != null) { //here is the problem so check.... 
        currNode = currNode.next;
      }
      currNode.next = null;
      return currNode;
    }
  }
  //delete a node whose value is given
  deletegivenData(value) {
    let currNode=this.head;
    //let temp;
    while(currNode !=null && currNode.next.data != value){  //currNode.data !=val ->to ise kaya hoga ko currnode to value wale node ko point kareg ass per conditon than we need a temp vatobale to tore previous ...
      //temp=currNode.next;
      currNode=currNode.next;
      //console.log('tyu',currNode.next.data)
    }
    //console.log('poiu',currNode.data)
    currNode.next=currNode.next.next
  }
  //delete node which is at nth position



  //delete node by given node value
  deleteAtNthPosition(n) {

    let currNode=this.head;
    let index=0;
    while(currNode !=null && index !=n-1){
      currNode=currNode.next;
      index++
    }
    currNode.next=currNode.next.next;
  }


  //4.>Reverse the node  //by 1.>iterative 2.> recursive  , do both way.  //https://www.youtube.com/watch?v=MsIRa740mQY

  reverseList() {}

  //5.>findl the middle of node

  middleNode() {}

  //6.>sort the node
  sortNode() {}

  //7. practice two program using recursion 1.>print/display list using recursion 2.>reverse list using recursion

  


  //7.> remove duplicate node from linkedlist


  //8.>y intersection problems; //using two pointer se bhi kar sakte and hashcode concept se bhi kar sakte.

  //9.>delete the node pointed by the given Pointer. //when head is not given

  //10.> Palindrome Linked List  , //do by recursion and if possible think by other way...


  isPalindrome(){
    let array=[]
    let currNode=this.head;
    let lenght=0;
    while(currNode !=null){
      array.push(currNode.data)
      currNode=currNode.next;
      lenght++
    };
    for(let i=0;i<=(array.length-1)/2;i++){
      if(array[i]==array[array.length -i-1]){
        console.log('it is palindrom');
      }else{
        console.log('not a palindrome')
      }
    }
    //console.log('lenght',lenght)
  }
  
  //11.>implement circular queue


//12.>Check if a linked list is a circular linked list.

//12.>Find nth node from the end of linked list

//12.>Write a program to Detect loop in a linked list.


//12.>Sliding Window Maximum  //vvvvv iimmpppp


  //13.>LRU //VVVIIMPP


  printListData() {
    let currNode = this.head;

    if (this.head == null) {
      console.log("list is empty");
      return; //if ye nahi diya to erro dega, can not rwad null property
    }
    while (currNode!= null) {
      //currNode.next != null  kiya to last node print nahi hoga , jo ki pehle first node tha yaha '3' hai, and new add karne ke baad wo 3 last ...
      console.log(currNode.data + "->");
      currNode = currNode.next;
    }
  }
}
let linklist = new LinkedList();
//linklist.insertAtBegning("12");
//linklist.insertAtBegning("17");
//linklist.insertAtBegning("3");
//linklist.insertAtBegning("4");
//linklist.insertAtBegning("5");
//linklist.insertAtBegning("6");
linklist.insertAtLast("1"); //ye end me add ho raha ...
linklist.insertAtLast("2");
linklist.insertAtLast("2");
linklist.insertAtLast("1");
//linklist.insertAtLast("1");

//linklist.findNodeAtIndex(8); // 6,5,4,3,7 ->so at 2nd pe 4
//linklist.isDataPresent(100);
//linklist.printListData();
//linklist.deleteFirst();
//linklist.deleteLast()

//console.log('below is after delete ')
linklist.printListData();
//linklist.insertAtNthIndex(23, 2);
//linklist.deletegivenData(9);
//linklist.deleteAtNthPosition(2)
console.log("after insert");
linklist.printListData();
linklist.isPalindrome()