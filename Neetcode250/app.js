// function twosum(nums,target){
//   for(let i=0;i<nums.length;i++){
//             for(let j=i+1;j<nums.length;j++){
//                 if(nums[i]+nums[j]===target){
//                     return [i,j]
//                 }
//             }
//         }
// }
// let res =  twosum([3,4,5,6],7)
// console.log(res);

// function isAnagram(s,t){
// if(s.length!==t.length){
//     return false
// }
// let sorted_S = s.split("").sort().join("")
// let sorted_t = t.split("").sort().join("")
// if(sorted_S!==sorted_t){
//     return false
// }else{
//     return true
// }

// }
// let res = isAnagram("racecar","carrace")
// console.log(res);

// function getConcatenation(nums){
// let ans = new Array(nums.length*2)
// let copy = nums

// let k=0;
// while(k<ans.length){
// for( let i=0;i<nums.length;i++){
//     ans[k] = nums[i]
//     k++
// }

// for(let j=0;j<copy.length;j++){
//     ans[k]=copy[j]
//     k++
// }
// }
// return ans
// }
// let res = getConcatenation([1,4,1,2])
// console.log(res);

// function hasDuplicate(nums){
// let newArr = []
// for(let i=0;i<nums.length;i++){
//     if(!newArr.includes(nums[i])){
//         newArr.push(nums[i])
//     }else{
//         return true
//     }
// }
// return false
// }

// let res = hasDuplicate([1, 2, 3, 4])
// console.log(res);

// function  removeElement(nums,val){
// let i=0
// let j=0
// while(i<nums.length){
// if(nums[i]!=val){
//     let temp = nums[i]
//     nums[i]=nums[j]
//     nums[j] = temp
//     j++
// }
// i++
// }
// return nums.slice(0,j)
// }
// let res = removeElement([3,2,2,3],3)
// console.log(res);

// function longestCommonPrefix(strs){
// let  prefix = strs[0]

// for(let i=1;i<strs.length;i++){
//     console.log("ele",strs[i]);
//     while(!strs[i].startsWith(prefix)){
//         prefix = prefix.slice(0,-1)
//         console.log(prefix);

//         if(prefix==""){
//             return ""
//         }
//     }
// }
// return prefix
// }

// let res = longestCommonPrefix(["bat","bag","bank","band"])
// console.log(res);

// function  majorityElement(nums){
//  let n = nums.length
// let map = new Map()

// for(let i=0;i<nums.length;i++){
//     if(!map.has(nums[i])){
//         map.set(nums[i],1)
//     }else{
//        map.set(nums[i],map.get(nums[i])+1)
//     }
// }

// for(let j=0;j<n;j++){
// let value = map.get(nums[j])
// if(value>n/2){
//     return nums[j]
// }

// }
// }

// let res =  majorityElement([2,2,1,1,1,2,2])
// console.log(res);

// function majority(nums){
// let ans =  nums[0]
// let count =1
// for(let i=1;i<nums.length;i++){
//     if(count==0){
//         ans = nums[i]
//         count=1
//     }else if(nums[i]===ans){
//         count++
//     }else{
//         count--
//     }
// }
// return ans
// }

// let res = majority([5,5,1,1,1,5,5])
// console.log(res);

// function sortcolor(nums){
// let i=0,k=0,j=nums.length-1
// while(k<=j){
//     if(nums[k]==0){
//         let temp = nums[k]
//         nums[k]=nums[i]
//         nums[i]=temp
//         i++
//         k++
//     }else if(nums[k]==2){
//          let temp = nums[k]
//         nums[k]=nums[j]
//         nums[j]=temp
//         j--
//         k++
//     }else{
//          k++
// }
//     }

// return nums
// }

// let res = sortcolor([1,0,1,2])
// console.log(res);

// function topKFrequent(nums,k){
// let map = new Map()
// if(nums.length==1){
//     return nums
// }
// for(let i=0;i<nums.length;i++){
//     if(!map.has(nums[i])){
//         map.set(nums[i],1)
//     }else{
//         map.set(nums[i],map.get(nums[i])+1)
//     }
// }

// let arr =  Array.from(map.entries())
// arr.sort((a,b)=>b[1]-a[1])
// let result = []
// for(let j=0;j<k;j++){
//     result.push(arr[j][0])
// }
// return result
// }
// let res = topKFrequent([1,2,2,3,3,3],2)
// console.log(res);

// function groupAnagrams(strs) {
// let map = new Map()

// for(let s of strs){
//   let sorted_S = s.split("").sort().join("")
//   console.log(sorted_S);

// if(!map.has(sorted_S)){
//   map.set(sorted_S,[])
// }
//   map.get(sorted_S).push(s)
// }
// return Array.from(map.values())
// }
// let res = groupAnagrams(["act", "pots", "tops", "cat", "stop", "hat"]);
// console.log(res)

// function productExceptSelf(nums) {
//   let i = 0,
//     j = nums.length - 1,
//     k = 0;
//   let arr = [];
//   while (k <= j) {
//     let product = 1;
//       for (let i = 0; i <= j; i++) {
//         if(i==k){
//             continue
//         }
//         product*=nums[i]
//       }

//     arr.push(product);
//     k++

//   }
//   return arr;
// }
// let res = productExceptSelf([1, 2, 4, 6]);
// console.log(res);

// function productExceptSelf(nums) {
//   let n = nums.length;
//   let left = new Array(n);
//   let right = new Array(n);

//   left[0] = 1;
//   right[n - 1] = 1;

//   for (let i = 1; i < n; i++) {
//     left[i] = left[i - 1] * nums[i - 1];
//   }
//   for (let j = n - 2; j >= 0; j--) {
//     right[j] = right[j + 1] * nums[j + 1];
//   }
//   let answer = [];
//   for (let i = 0; i < n; i++) {
//     let product = left[i] * right[i];
//     answer.push(product);
//   }
//   return answer;
// }

// let res = productExceptSelf([1, 2, 4, 6]);
// console.log(res);

// O(n2)
// function longestConsecutive(nums){
// let res = 0
// const store = new Set(nums)
// for(let num of nums){
//     let streak = 0
//     let curr = num
//     while(store.has(curr)){
//         streak++
//         curr++
//     }
//     res = Math.max(res,streak)
// }

// return res
// }
// let res =  longestConsecutive([2,20,4,10,3,4,5])
// console.log(res);

// O(n log n)
// function longestConsecutive(nums){
// if(nums.length===0){
//     return  0
// }
// nums.sort((a,b)=> a-b)

// let longest = 1
// let current = 1

// for(let i=1;i<nums.length;i++){
//     if(nums[i]===nums[i-1]){
//         continue
//     }
//     if(nums[i]===nums[i-1]+1){
//         current++
//     }
//     else{
//         current=1
//     }
//     longest= Math.max(longest,current)
// }
// return longest
// }

// let res = longestConsecutive([2,20,4,10,3,4,5])
// console.log(res);


// function  majorityElement(nums){
// let map = new Map()
// let n = nums.length

// for(let i=0;i<nums.length;i++){
//     if(!map.has(nums[i])){
//         map.set(nums[i],1)
//     }else{
//        map.set(nums[i],map.get(nums[i])+1)
//     }
// }

// let store = new Set()
// for(let j=0;j<nums.length;j++){
//     let value =  map.get(nums[j])
//     if(value>n/3){
//         store.add(nums[j])
//     }
// }

// const arr = Array.from(store)
// return arr


// }

// let res = majorityElement([5,2,3,2,2,2,2,5,5,5])
// console.log(res);




// function  maxProfit(prices){
// let sum = 0
// let profit;
// for(let i=0;i<prices.length;i++){
//     if(prices[i]<prices[i+1]){
//         profit = prices[i+1]-prices[i]
//         sum+=profit
//     }
// }
// return sum
// }
// let res =  maxProfit([7,1,5,3,6,4])
// console.log(res);


// function firstMissingPositive(nums){
// nums =  nums.sort((a,b)=>a-b)
// let missing = 1
// for(const num of nums){
//     if(num>0 && num===missing){
//         missing++
//     }
// }
// return missing
// }
// let res = firstMissingPositive([1,2,4,5,6,3,1])
// console.log(res);


// Stack
// function calPoints(operations){
// let Stack = []
// for(const op of operations){
//     if(op==="+"){
//             let top = Stack.pop()
//             let newTop =top + Stack[Stack.length-1]
//             Stack.push(top)
//             Stack.push(newTop)
//     }
//     else if(op==="C"){
//         Stack.pop()
//     }else if(op==="D"){
//         let newTop =  2 * Stack[Stack.length-1]
//         Stack.push(newTop)
//     }else{
//         Stack.push(parseInt(op))
//     }
// }

// return Stack.reduce((a,b)=>a+b,0)
// }
// let res =  calPoints(["1","2","+","C","5","D"])
// console.log(res);

// oN2
// function isValid(s){
// while(s.includes("()") || s.includes("[]") || s.includes("{}")){
//   s=s.replace("()","")
//   s=s.replace("[]","")
//   s=s.replace("{}","")
// }
// return s === ""
// }
// let res = isValid("([{}])")
// console.log(res);

// function isValid(s){
// let stack = []
// let obj = {
//     ")":"(",
//     "]":"[",
//     "}":"{"
// }
// for(let c of s){
//     console.log(obj[c]);
//   if(obj[c]){
//     console.log("in")
//     if(stack[stack.length-1]===obj[c]){
//         console.log("key");
//     }else{
//         return false
//     }
//   }else{
//     stack.push(c)
//   }
// }
// return stack.length===0
// }
// let res =isValid("([{}])")
// console.log(res);


// function isPalindrome(s){
// let str =  s.replace(/[^a-zA-Z0-9]/g,"")
// str =str.toLowerCase()
// let i=0,j=str.length-1
// while(i<j){
//   if(str[i]!==str[j]){
//     return false
//   }
//   i++
//   j--
// }
// return true

// }

// let res = isPalindrome("Was it a car or a cat I saw?")
// console.log(res);


// function merge(nums1, m, nums2, n){
// let copy = nums1.slice(0,m)
// nums1 = new Array(m+n)
// let i=0,j=0,k=0
// while(i<m && j<n){
//   if(copy[i]<nums2[j]){
//     nums1[k]=copy[i]
//     i++
//     k++
//   }else{
//     nums1[k]=nums2[j]
//     j++
//     k++
//   }
// }
// while(i<m){
//   nums1[k]=copy[i]
//   i++
//   k++
// }
// while(j<n){
//   nums1[k]=copy[j]
//   j++
//   k++
// }
// return nums1
// }

// let res = merge([10,20,20,40,0,0],4,[1,2],2)
// console.log(res);




// function validPalindrome(s){
//  let str = s.replace(/[^a-zA-Z0-9]/g,"")
//  str = str.toLowerCase()
//  let i=0,j=str.length-1
//  let el;
// while(i<j){
// if(str[i]!=str[j]){
//      el=str[j]
// }
// i++
// j--
// }

// let newstr = ""
// for(let i=0;i<str.length;i++){
//     if(str[i]!==el){
//         newstr+=s[i]
//     }
// }

// let k=0,m=newstr.length-1
// while(k<m){
//     if(newstr[k]!==newstr[m]){
//         return false
//     }
//     k++
//     m--
// }
// return true

// }
// let res = validPalindrome("abbda")
// console.log(res);


// function validPalindrome(s) {
//     let i = 0;
//     let j = s.length - 1;

//     while (i < j) {

//         if (s[i] !== s[j]) {

//             // Try deleting the left character
//             let left = isPalindrome(s, i + 1, j);

//             // Try deleting the right character
//             let right = isPalindrome(s, i, j - 1);

//             return left || right;
//         }

//         i++;
//         j--;
//     }

//     return true;
// }


// function isPalindrome(s, i, j) {

//     while (i < j) {

//         if (s[i] !== s[j]) {
//             return false;
//         }

//         i++;
//         j--;
//     }

//     return true;
// }


// let res = validPalindrome("abbda");

// console.log(res);



function mergeAlternately(word1, word2){
let newstr = new Array(word1.length+word2.length)
let m = word1.length
let n = word2.length
let i=0,j=0
while(i<m && j<n){
    newstr.push(word1[i],word2[j])
}
i++
j++
while(i<m){
    newstr.push(word1[i])
    i++
}
while(j<n){
    newstr.push(word2[j])
    j++
}

return newstr.join("")
}

let res = mergeAlternately("ab","abbxxc")
console.log(res);


