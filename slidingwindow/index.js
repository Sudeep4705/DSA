// sliding window
// function consum(arr, k) {
//   let sum = 0;maxsum =0
//   for (let i = 0; i < k; i++) {
//     sum += arr[i];
//   }
//   for(let i=k;i<arr.length;i++){
//         sum = sum - arr[i-k]+arr[i]
//         maxsum = Math.max(sum,maxsum)
//   }
//   return maxsum
// }

const { count } = require("console");

// let res = consum([2,1,5,1,3,2],3)
// console.log((res));

// 2,1,5
// 1,5,1
// 5,1,3
// 1,3,2

// you have a array called nums and u will get the k element
// u need to return true
// if i and j have same element and also if abs(i-j)<=k

// create function called duplicate
// function duplicate(nums,k){
// let map = new Map()
// let j=0
// for(let i=0;i<nums.length;i++){
//   if(map.has(nums[i])){
//     return true
//   }
// map.set(nums[i],i)
//   if(i-j>=k){
//     map.delete(nums[j])
//     j++
//   }
// }
// return false
// }
// let res = duplicate([1,2,3,1],3);
// console.log(res)

//Longest Harmonious Subsequence
//we have Harmonious array
//maximum  Value - minValue
// the subarray need to be if u calculate the diffrence that needs to be 1
// means 3-2 = 1
// i can use o(n^2)

function Harmonious(nums) {
  let max = 0
  for(let i=0;i<nums.length;i++){
    let a = nums[i]
  let count1=0,count2=0
  for(let j=0;j<nums.length;j++){
      if(nums[j] === a)
    count1++;
if(nums[j] === a + 1)
    count2++;
  }
  if(count2 > 0){
    max = Math.max(max, count1 + count2);
}
  }
return max
}
let res = Harmonious([1, 3, 2, 2, 5, 2, 3, 7]);
console.log(res);
