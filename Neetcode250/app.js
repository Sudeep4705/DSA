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
