// function getConcatenation(nums) {
//   let arr = new Array(nums.length * 2);
//   let i = 0;

//   while (i < arr.length) {
//     for (let j = 0; j < nums.length; j++) {
//         arr[i] = nums[j]
//         i++
//     }
//     for(let k=0;k<nums.length;k++){
//         arr[i]=nums[k]
//         i++
//     }
//   }
//   return arr
// }

// let res = getConcatenation([1, 4, 1, 2]);
// console.log(res);


    // function getConcatenation(nums) {
    // let ans = [];
    //         for(let i=0;i<2;i++){
    //                 ans = ans.concat(nums);
    //         }
    //         return ans;
    // }

    // let res = getConcatenation([1, 4, 1, 2]);
    // console.log(res);

// function  hasDuplicate(nums){
// for(let i=0;i<nums.length;i++){
//     for(j=i;j<nums.length;j++){
//         if(nums[i]==nums[j]){
//             return true
//         }
//     }
// }

// return false
// }

// let res = hasDuplicate([1, 2, 3, 3])
// console.log(res);



// function  hasDuplicate(nums){
//  return new Set(nums).size !== nums.length;
// }
// let res = hasDuplicate([1, 2, 3, 3])
// console.log(res);


// function  isAnagram(s, t){
// let s_sorted =  s.split("").sort().join("")
// let t_sorted = t.split("").sort().join("")
// if(s_sorted!==t_sorted){
//     return false 
// }else{
//     return true
// }
// }

// let res = isAnagram("racecar","carrace")
// console.log(res);

// function  twoSum(nums, target){
// for(let i=0;i<nums.length;i++){
//     for(let j=i+1;j<nums.length;j++){
//        if(nums[i]+nums[j]==target){
//         return [i,j]
//        } 
//     }
// }
// }
// let res = twoSum([3,4,5,6],7)
// console.log(res);



// function  twoSum(nums, target){
// let map = new Map()
// for(let i=0;i<nums.length;i++){
//     let min  = target - nums[i]
//     if(map.has(min)){
//         return [map.get(min),i]
//     }
//     map.set(nums[i],i)
// }
// return []
// }
// let res = twoSum([3,4,5,6],7)
// console.log(res);

function longestCommonPrefix(strs){
let prefix = strs[0]
for(let i=1;i<strs.length;i++){
    while(!strs[i].startsWith(prefix)){
        prefix = prefix.slice(0,-1)
        if(prefix==""){
            return ""
        }
    }
}
return prefix
}

let res = longestCommonPrefix(["bat","bag","bank","band"])
console.log(res);
