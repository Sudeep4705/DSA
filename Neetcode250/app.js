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


function topKFrequent(nums,k){
let map = new Map()
if(nums.length==1){
    return nums
}
for(let i=0;i<nums.length;i++){
    if(!map.has(nums[i])){
        map.set(nums[i],1)
    }else{
        map.set(nums[i],map.get(nums[i])+1)
    }
}

let arr =  Array.from(map.entries())
arr.sort((a,b)=>b[1]-a[1])
let result = []
for(let j=0;j<k;j++){
    result.push(arr[j][0])
}
return result
}
let res = topKFrequent([1,2,2,3,3,3],2)
console.log(res);
