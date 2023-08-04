//https://www.youtube.com/watch?v=jB9zYAZ0yJ0&list=PLzjZaW71kMwRTtDWYVPvkJypUpKWbuT7_

// https://www.youtube.com/watch?v=BmZnJehDzyU

//*********************************************************************************************** */

//1.>reverse stack

//method 1==>by sime way like pop and...

let stack1 = [1, 2, 3, 4];
let stack2 = [];

console.log(stack2);
const reverse = (s) => {
  if (s.length == 0) {
    return;
  }
  const a = s.pop();
  stack2.push(a);
  reverse(s);
};

//reverse(stack1);
//console.log(stack2)

//method 2==>using single stack.

let st = [1, 2, 3, 4];

//let name123='prem'
//let st =name123.split('');  //split(' ')->this will give wrong output
console.log('poiuyu',st)
const insertAtBottom = (num) => {
  console.log('lngth',num,st.length,st[st.length-1])
  if (st.length == 0) { //one aaay blank that st me push ho gya and and control gya to line 55,now num2 and st length one, ..
    st.push(num);
    return;
  }
  let num1 = st.pop();

  insertAtBottom(num);
  st.push(num1); //jisko side me rakha tha usko ab yaha push kar rahe hai...
};

const reverserecursion = (st) => {
  console.log(st);
  if (st.length == 0) {
    return;
  }
  let num = st.pop();

  reverserecursion(st);
  console.log('num',num);
  insertAtBottom(num);
};
reverserecursion(st);
console.log("st", st);
// This code is contributed by avanitrachhadiya2155

//2.>valid/balanced parenthesis

const isValid = (s) => {
  let stack12 = [];
  for (let i = 0; i <= s.length - 1; i++) {
    //console.log('jkkl',s[i])
    if (s[i] == "[") {
      stack12.push("]");
    } else if (s[i] == "{") {
      stack12.push("}");
    } else if (s[i] == "(") {
      stack12.push(")");
    } else {
      let popped = stack12.pop();

      if (popped != s[i]) {
        return false;
      }
    }
  }
  if (stack12.length == 0) {
    return true;
  } else {
    return false;
  }
};
const resultBalanceParenthesis = isValid("["); //"[","()","()[]{}"
console.log("resultBalanceParenthesis", resultBalanceParenthesis);




//4.>sort the stack  //first try with two stack than go for one stack recursion....

//==>https://www.geeksforgeeks.org/sort-a-stack-using-recursion/


//4.>reverse string  using stack;


//=>solved as same as first one.



//5.>find middle element of stack   // //first think without recursion and than try with recursion

let middleElementStack=()=>{

}


//5.1>insert an element at bottom of stack.  // //first think without recursion and than try with recursion


//6.>Next Greater Element (covered in lecture)


//7.>Min Stack Leetcode (covered in lecture)



//8.vvvvvviiimmppp>online stock span ->by both method->brute force and stack


//9.vvvviimmpppp>histogram...max rectangle area...  // both way se try karo brute force and stack..


//10>infix,postfix,prefix.



//10.1.>Redundant Parenthesis  //https://www.youtube.com/watch?v=rlCSjCGc3Z0&t=31s



//11.vvvviiimmppp>rain water traping...//try all way brute force and stack..

//12.>celibrity problem..  //try both way brute force and stack....

//13.>maximum frequency   //if you wish can ignore....


//let price = [100, 80, 60, 70, 60, 75, 85]  //output->1 1 1 2 1 4 6

let price =[10, 4, 5, 90, 120, 80]  //1 1 2 4 5 1

for (let i = 0; i <= price.length - 1; i++) {
  let count = 1; //by deafult sab ka count at least one to hai hi na;
  for (let j = i; j <= i; j--) {
    if (i != 0) {
      if (price[j] <= price[i] && price[j - 1] <= price[i]) {
        //price[j-1] <= price[i]  ,as in question consecutive....so if just pichla no hi bada to phir pichal and next ko count hi Q karna
        count = count + 1;
      } else {
        break;
      }
    } else {
      break;
    }
  }
  console.log("price", count);
}


















