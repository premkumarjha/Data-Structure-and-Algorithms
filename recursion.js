
//recursion is just like loop like for loop or other loop; recursion ye kehta ki ak karke mere ko de do baad banki ham khud nikal lenge.....

//*******************************STEP TO SOLVE RESURSION PROBLEM**************************************************** */

//https://www.youtube.com/watch?v=Mr9MVpSoTGk

//1.>find the base case/condition  //Every recursive function needs a termination point which is the smallest possible solution
//2.>find the relation b/w the problems and subproblems;  //   Every recursive function reduces to smaller solutions of subproblems which can then be combined to form a solution.          
//3.>generalise the relations. //Once we figure out the above two properties, then to implement a recursive function we simply call the function again according to the recursive relation until we reach the base case.


//********************************************************************************************************** */

//Difference between Recursion and Iteration =>https://www.geeksforgeeks.org/difference-between-recursion-and-iteration/

//jab ham recursively function call kar rahe hai...to wo stack  me...,stack means each call time function top..next call wals ke top like that...check videos...
//each function ke lye uske separate context crete hota...so if suppose 5 times fucntion call hua to 5 times callsatck me...
const countup = (i) => {
    if (i > 5) return;  //base condition to controll the recursion function calling and after that{breaking or returning from base condition} it will run lines of code which is below the recursion function....
   //jaise hi base condition true hua , now recursion fucntion will not call main fucntion that is outer function that is at line 4., and recursion ke noche ke line run honge..
    //console.log(i); //0 to 5  //head part...
    countup(i + 1);
   // console.log(i); //5 to 0  //tail part..
    
  };
  countup(0);
  
  //example

  const recursion=(a)=>{
    //base condition
    if(a==0) return;
    console.log(a); //output->5,4,3,2,1
    recursion(a-1);  //dnt think ye return ho gya phir bhi ye Q....think like ye call stack....kaise setTimeout me after a time output wo hi callsatck same here think or debug..
    console.log(a)  //1,2,3,4,5   {ye call stack wala....}
};
recursion(5)




  //1.>Factorial of a Number  //

  //n! = 1 if n = 0 or n = 1

const factotrial = (n) => {
  // if (n == 1 || n == 0) {
  //   return 1;
  // } else {
  //   return n * factotrial(n - 1);
  // }


  if (n == 1 || n == 0) {
    return 1;
  }
//console.log(result)
  const result = n * factotrial(n - 1);
  //console.log('result',result)
  return result;
};

const factresult=factotrial(5);
//console.log('factresultfactresult',factresult);


  //2.>Fibonacci Sequence

const fibo=(n)=>{
  
  //0,1,1,2,3,5,8
// if(n == 0 || n ==1){
//   return 1;
// }else{
// const result=fibo(n-1)+ fibo(n-2);
// return result;
// }

if(n == 0 || n ==1){
  return 1;
}
const result=fibo(n-1)+ fibo(n-2);
return result;

  
}

for(let i=0;i<=5;i++){
  const output=fibo(i); //fibo(5) =>fibo(4) +fibo(3)
 // console.log(output)
}



  //3.>Sum of the First n Natural Numbers

const sumfirstn=(n)=>{
//let sum=0;
  if(n==1){
    return 1;
  }
  let sum = n+sumfirstn(n-1);
return sum
}

const output=sumfirstn(3);//sumfirstn(2)=sumf(2)+sum(1)
console.log('pp',output)

//4.>note->make github new repository for DSA and push all codes there..



  //5.>Power of a Number

  const pow=(x,n)=>{

    if(n==0){
      return 1;
    }

    const retval=pow(x,n-1);  //iske niche ko tail kehte hai...
    const result=x*retval;
    return result;

  }
//const output=pow(2,5);
//console.log(output)


//6.>How to reverse Linked List using Recursion. //next, current and previous...




//7.>find xor from one to n. //ex find xor from 1 to 14 //covered in 4th june lecture 8:30 PM to 10PM



//=>practice bit manupulation problems{these problems are NOT much IMPORTANT SO DNT GIVE MORE TIME,but still practice some imp} ==>check geeks for geeks + leetecode{select easy and medium...}



//8.> find xor of [5 6 7 8 6 5 7 ] //output is 8, hint->xor of same no is zero.



//9.> How to know if a number is a power of 2?  //bit manupulations problems..  //hint ->Note if dividing or multiplication by 2 or powers of 2 (4,8,16..)is need anywhere than better to use there right shift and left sift operator.




//concepts or trick==>Left shift is useful in implementing multiplication with powers of 2 and Right shift is used to implement division with powers of 2.
//concept or trick ==>left shifting an integer ‘x’ with an integer ‘y’ (x<<y) is equivalent to multiplying x with 2^y (2 raise to power y).
//concepts or trick==>right shifting (x>>y) is equivalent to dividing x with 2^y.
//concepts or trick =>if N & {and operator} N-1=0 ->it is power of 2. //n is power of 2.// 3,7 ka bit me-> all ne and last me zero, 3->0011, 7->0111, // N ka dekho to feel ki uske alawa sab zero and only wahi place one.->4->0100,8->1000,
//concepts or trick->If a number N is a power of 2, then the bitwise AND of N and N-1 will be 0. But this will not work if N is 0. So just check these two conditions, if any of these two conditions is true.




//10.>swap the value without using third variable, a=5,b=7. //hint->a=a^b;b=a^b;a=a^b';^->xor symbol

//ans of above->a=a^b;b=a^b;a=a^b {best and common way by xor}}   and a=a+b;b=a-b,a=a-b or a=a*b;b=a/b;a=a/b




  //11.>Least Common Multiple(LCM) of 2 Numbers  // //if koi same problem leetecode pe ha to waha praxtice karo...so that waha count badhega..





  //12.>Greatest Common Divisor(GCD) of 2 Numbers





  //13.>Merge Sort  // //if koi same problem leetecode pe ha to waha praxtice karo...so that waha count badhega..





  //14.>Reverse a string




  //15.>Decimal to binary number using recursion


  



//16.>===>https://www.youtube.com/watch?v=u-HgzgYe8KA


//17.>==>https://www.youtube.com/watch?v=9rt-hFcXd0M



//18.>====>https://www.youtube.com/watch?v=j9RG18jfnRY




//19.>https://www.youtube.com/watch?v=xZykmhcWGuY




//20.>practice the scanario mention in ->https://www.youtube.com/watch?v=oicojjHO7uM   //vvvvviiiimmmmppppp






  //21.> try of possible pending.... =>https://leetcode.com/tag/recursion/
 


