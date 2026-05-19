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

// Longest Harmonious Subsequence

