

//.1>online stock span
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
  //console.log("price", count);
}

//2.>Sliding Window Maximum
let nums = [8, 5, 10, 7, 9, 4, 15, 12, 90, 13];     //output =>[10, 10, 10, 15, 15, 90, 90]
let k = 4
let resultArray=[]
let max=nums[0];
for(let i=0;i<=nums.length-k;i++){  //i<=nums.length-k-1 ->than will get upto 6 onlu...
    for(let j=0;j<=i+k-1;j++){
        if(max < nums[j]){
            max=nums[j];
        }
    }
    resultArray.push(max);
}
//console.log(resultArray)


//3.>