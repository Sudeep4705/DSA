const { count } = require("node:console");

const prompt = require("prompt-sync")();
// left rotation by 1 element
// let arr = [1,3,4,5,6];
// let copy = arr[0]
// for(let i=0;i<arr.length-1;i++){
//       arr[i] = arr[i+1]
// }
// arr[arr.length-1] = copy

// console.log(arr);

// right rotation by 1
// let arr = [1,2,3,4,5];
// let copy = arr[arr.length-1]
// for(i=arr.length-1;i>=1;i--){
//       arr[i] = arr[i-1]
// }
// arr[0] = copy
// console.log(arr);

// let arr = [1,2,3,4,5]
// let copy = arr[0]
// for(let i=0;i<arr.length-1;i++){
//             arr[i] = arr[i+1]
// }

// arr[arr.length-1] = copy

// console.log(arr);

// for (i = 1; i <= 4; i++) {
//   console.log(i);
//   for (j = 1; j <= 3; j++) {
//     console.log("hello");
//   }
// }

// left and right rotation by k element
// let k = Number(prompt("enter the num:"))
// let arr = [1,2,3,4,5]
// k = k%arr.length
// for(i=0;i<k;i++){
//     let copy = arr[0]
//     for(let j=0;j<arr.length-1;j++){
//         arr[j] = arr[j+1]
//     }
//     arr[arr.length-1] = copy
// }

// console.log(arr);

// let k = Number(prompt("enter the num:"));
// let arr = [1,2,3,4,5];
// k =k%arr.length;
// for(i=0;i<k;i++){
//     let copy = arr[arr.length-1]
//     for(let j=arr.length-1;j>0;j--){
//         arr[j] = arr[j-1]
//     }
//     arr[0] = copy
// }
// console.log(arr);

// anotther method to solve this problem using algorithm and space
// let arr = [1,2,3,4,5];
// let temp= new Array(arr.length)
// let k = Number(prompt("enter the num:"))
// k = k%arr.length
// for(i=0;i<arr.length;i++){
//     temp[i] = arr[(i+k)%arr.length]

// }
// console.log(temp);

// right
// let arr = [1,2,3,4,5];
// let k = Number(prompt("enter the num:"));
// k =  k%arr.length
// let temp = new Array(arr.length)

// for(i=0;i<arr.length;i++){
//     arr[(i+k)%arr.length] = temp[i]
// }
// console.log(temp);

// another method
// let arr = [1,2,3,4,5]
// let k = Number(prompt("enter the k:"))
// k = k%arr.length
// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)
// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         arr[j] = temp
//         i++
//         j--
//     }
// }
// console.log(arr);

// let arr = [1,2,3,4,5]
// let k = Number(prompt("enter the k:"))
// k = k%arr.length
// reverse(0,k-1)
// reverse(k,arr.length-1)
// reverse(0,arr.length-1)
// function reverse(i,j){
//     while(i<j){
//         let temp = arr[i]
//         arr[i] = arr[j]
//         temp = arr[j]
//         i++
//         j--
//     }
// }

// console.log(arr);

// remove dublicates form sorted array

// function duplicates(arr){
// let j=1
// for(let i=0;i<arr.length-1;i++){
//     if(arr[i]!=arr[i+1]){
//         arr[j] = arr[i+1]
//         j++
//     }
// }
// return arr

// }

// console.log(duplicates([1,1,2,3,3,4,4,5]));

// merge sorted array
// let arr1 = [2,5,6]
// let arr2 =[1,3,4,8]

// let size = arr1.length + arr2.length
// let temp =new Array(size)
// let k=0
// let j=0,i=0
// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]<arr2[j]){
//         temp[k] =arr1[i]
//         i++
//         k++
//     }else{
//         temp[k] =arr2[j]
//         j++
//         k++
//     }
// }

// while(j<arr2.length){
//     temp[k] =arr2[j]
//     k++
//     j++
// }
// while(i<arr1.length){
//     temp[k] =arr1[i]
//     k++
//     i++
// }
// console.log(temp);

/*
pass1: 2<1  false i=0
   next condition 1<2

temp[1]
j++ = 1 index

pass2: 2<3 1st condition true 
temp[1,2]
i++= 1 index

pass3 = 5<3 false i=1
next condition 3<5
temp [1,2,3]
j++ j=2

pass4 5<4 false i=1
next condition 4<5
temp[1,2,3,4]
j++ = j=3

pass5 5<8 true
temp[1,2,3,4,5] 
i++ = 2

pass6 6<8 true
temp[1,2,3,4,5,6]
i++ =3

lastly it will add 8 in while loop
*/

// let arr1 = [6,7,8,9]
// let arr2 = [1,2,3,4,5]

// let temp = new Array(arr1.length+arr2.length)
// let k=0,i=0,j=0

// while(i<arr1.length && j<arr1.length){
//     if(arr1[i]<arr2[j]){
//         temp[k] = arr1[i]
//         k++
//         i++
//      }
//      else {
//         temp[k] =arr2[j]
//         k++
//         j++
//      }
//      i
// }

// while(j<arr2.length){
//     temp[k] = arr2[j]
//     k++
//     j++
// }
// while(i<arr1.length){
//     temp[k] = arr1[i]
//     k++
//     i++
// }

// function duplicate(arr){
//    let j=1
// for(let i=0;i<arr.length;i++){
//    if(arr[i]!=arr[i+1]){
//      arr[j] =arr[i+1]
//      j++
//    }
// }
// return arr[0,j];
// }
// console.log(duplicate([1,1,2,3,4]));
// function TwoSum(arr,target){
// for(let i=0;i<arr.length;i++){
//    for(let j=i+1;i<arr.length;j++){
//       if(arr[i]+arr[j]==target){
//          return [i,j]
//       }
//    }
// }
// }
// console.log(TwoSum([3,2,3],6));

// function merge(nums1,m,nums2,n){
//  let copy  = nums1.slice(0,m)
//  let k=0,j=0,i=0
//  while(i<m && j<n){
//    if(copy[i]<nums2[j]){
//       nums1[k]=copy[i]
//       i++
//    }else{
//       nums1[k] = nums2[j]
//       j++
//    }
//    k++
//  }

//  while(i<m){
//    nums1[k]=copy[i]
//    i++
//    k++
//  }

//  while(j<n){
//    nums1[k]=nums2[j]
//    j++
//    k++
//  }
//  return nums1
// }

// function merge(nums1,m,nums2,n){
//     const copy  = nums1.slice(0,m)
//     let i=0,j=0,k=0
//     while(i<m && j<n){
//       if(nums2[j]<copy[i]){
//         nums1[k]=nums2[j]
//         j++
//       }
//       else{
//         nums1[k]=copy[i]
//         i++
//       }
//       k++
//     }

//     while(i<m){
//       nums1[k]=copy[i]
//       i++
//       k++
//     }

//     while(j<n){
//       nums1[k]=nums2[j]
//       j++
//       k++
//     }

//     return nums1
// }

// console.log(merge([4,5,6,0,0,0],3,[1,2,3],3));

// function duplicates(arr){
//   let temp=[],k=0
// for(let i=0;i<arr.length;i++){
//   if(arr[i]!=arr[i+1]){
//     temp[k] = arr[i]
//     k++
//   }
// }
// return temp
// }
// console.log(duplicates([1,1,2,2,3,3,4,5,7,7,8,9]));
// function reverse(str){
//   return str.split(" ").map((word)=>word.split("").reverse().join("")).join(" ")
// }

// console.log(reverse("sudeep goat"));

// function mergearray(nums1,nums2){
//    let temp = new Array(nums1.length+nums2.length)
//    let i=0,j=0,k=0
//    while(i<nums1.length && j<nums2.length){
//          if(nums1[i]>nums2[j]){
//                temp[k] = nums2[j]
//                j++
//                k++
//          }else{
//             temp[k]=nums1[i]
//             i++
//             k++
//          }
//    }
//    while(i<nums1.length){
//       temp[k] = nums1[i]
//       k++
//       i++
//    }
//    while(j<nums2.length){
//       temp[k] = nums2[j]
//       k++
//       j++
//    }
//    return temp;
// }

// console.log(mergearray([5,6,7,8,9],[1,2,3,4]));

// function duplicates(arr){
//    let k=0
//       for(let i=0;i<=arr.length-1;i++){
//          if(arr[i]!=arr[i+1]){
//                 console.log(arr[i]);
//                arr[k]=arr[i]
//                k++
//          }
//       }
//       return k
// }
// console.log(duplicates([1,1,2]));

// function duplicates(nums){
//    let  j=1;
//    for(i=0;i<nums.length-1;i++){
//       if(nums[i]!=nums[i+1]){
//          nums[j] = nums[i+1]
//          j++
//       }
//    }
//    return j
// }
// console.log(duplicates([1,1,2]));

// function merge(nums1, m, nums2, n) {
//   let i = 0,
//     j = 0,
//     k = 0;
//     let copy = nums1.slice(0,m)
//     console.log(copy);
//     console.log(m);

//   while (i < m && j < n) {
//     if (copy[i] > nums2[j]) {
//       nums1[k] = nums2[j]
//       j++;
//     } else {
//       nums1[k] = copy[i]
//       i++;
//     }
//     k++
//   }
//   while (i < m) {
//     nums1[k] = copy[i]
//     i++;
//     k++;
//   }
//   while (j < n) {
//     nums1[k] = nums2[j]
//     j++;
//     k++;
//   }

//   return nums1;
// }
// console.log(merge([1, 2, 3, 0, 0, 0],m = 3, [2, 5, 6], n = 3));

// buy and sell stock 1.2.1
// function buy(prices){
//    let min=prices[0]
//    let maxProfit = 0
//    for(let i=0;i<prices.length;i++){
//       if(prices[i]<min)
//          min = prices[i]
//       let profit = prices[i] - min
//       maxProfit = Math.max(profit,maxProfit)
//    }
//    return maxProfit
// }
// let res  =  buy([7,1,5,3,6,4])
// console.log(res);

// buy and sell stock 1.2.2
// function buystock(prices) {
//   let sum = 0;
//   let profit
//     for (j = 0; j < prices.length; j++) {
//       if (prices[j]<prices[j+1]){
//        profit = prices[j+1] - prices[j]
//         sum+=profit
//       }}
//   return sum;
// }
// let res = buystock([7, 1, 5, 3, 6, 4]);
// console.log(res);

//sort colors

// function sortcolors(arr) {
//   let j = 0,i=0
//   let k=arr.length-1
// while(arr[i]!=arr[k]){
//   if(arr[i]==0){
//     let temp = arr[i]
//     arr[i] = arr[j]
//     arr[j]=temp
//     j++
//     i++
//   }
//   else if(arr[i]===2){
//     let temp = arr[i]
//     arr[i]=arr[k]
//     arr[k]=temp
//     k--
//   }
// }
//   return arr;
// }
// let res = sortcolors([2, 0, 2, 1, 1, 0]);
// console.log(res);

// function sortcolors(arr) {
//   let i = 0,j = 0;
//   let k = arr.length - 1;
//   while (i<=k){
//     if (arr[i] == 0){
//       let temp = arr[i];
//       arr[i] = arr[j];
//       arr[j] = temp;
//       i++;
//       j++;
//     }else if(arr[i] == 2) {
//       let temp = arr[i];
//       arr[i] = arr[k];
//       arr[k] = temp;
//       k--;
//     }
//     else{
//       i++
//     }
//     }
//   return arr;
// }
// let res = sortcolors([2,0,1]);
// console.log(res);


// maximum subarray kedans algo

// function subarray(arr){
//    let sum=0,max=-Infinity
//    for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
//    max = Math.max(sum,max)
//     if(sum<0)sum=0
//    }
//   return max
// }

// let res = subarray([-2,1,-3,4,-1,2,1,-5,4])
// console.log(res);


// mores algorithm majority algorithm
// function majority(arr){
// let ans=arr[0],count=1
// for(let i=1;i<arr.length;i++){
//    if(count==0){
//       ans=arr[i]
//       count=1
//    }
//    else if(arr[i]==ans)
//       count++
//    else count --
// }
// return ans
// }
// let res = majority([2,2,1,1,1,2,2])
// console.log(res);


// trapping rain water
// function trapping(arr){
// let left  =  new Array(arr.length)
// let right =  new Array(arr.length)
// let maxLeft = arr[0],maxRight=arr[arr.length-1]
// left[0]=maxLeft,right[right.length-1]=maxRight

// for(let i=1;i<arr.length;i++){
//    maxLeft=Math.max(arr[i],maxLeft)
//    left[i]=maxLeft
// }
// for(let i=arr.length-2;i>=0;i--){
//    maxRight=Math.max(arr[i],maxRight)
//    right[i]=maxRight
// }
// let ans=0

// for(let i=0;i<arr.length;i++){
//    ans+=Math.min(left[i],right[i])-arr[i]
// }
// return ans
// }

// let res = trapping([0,1,0,2,1,0,1,3,2,1,2,1])
// console.log(res);




