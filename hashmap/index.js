// hashmap

// set() -set("name","sudeeep") method which will help tto add or update the key value pair inside the map
// Note:if u are using the string as key u need to write in double quote and also if its already there i will update the value
//get()-get("name")this method use tto get a value using key
// has() -has("name")  will check whether key is exist or not
// delete() - it will remove the key and value if u proovide the key

// let map = new Map();
// map.set("name", "sudeep");
// console.log(map);
// console.log(map.get("name"));
// console.log(map.has("name"));
// console.log(map.delete("name"));
// console.log(map);

//two some using hashmap

// function twosum(nums,target){
//   let res = new Map()
//   for(let i = 0; i<nums.length;i++){
//     let el = target - nums[i]
//     if(res.has(el)){
//          return [res.get(el),i]
//     }
//     res.set(nums[i],i)
//   }
// }
// let result = twosum([2, 7, 11, 15],9);
// console.log(result);

// contains duplicates
// function duplicate(arr){
// let el = new Map()
// for(let i=0;i<arr.length;i++){
//  if(el.has(arr[i]))
//   return true
//  el.set(arr[i],i)
// }
// return false
// }
// let res = duplicate([1,2,3,4])
// console.log(res);

// valid anagram
// function Anagram(s, t) {
// const map = new Map()
// if(s.length != t.length)
//   return false
//   for( i=0;i<s.length;i++){
//       if(!map.has(s[i])){
//           map.set(s[i],1)
//       }else{
//           map.set(s[i],map.get(s[i])+1)
//       }
//   }
//   console.log(map);
//    console.log("Second");
//   for(let j=0;j<t.length;j++){
//       if(!map.has(t[j]) || !map.get(t[j])){
//         return false
//   }else{
//         map.set(t[j],map.get(t[j])-1)
//   }
//   console.log(map);

//   }
//   return true
// }
// let res = Anagram("anagram", "nagaram");
// console.log(res);

// First Unique Character

// function UniqueCharacter(s){
// let map =  new Map()

// for(let i=0;i<s.length;i++){
//     if(!map.has(s[i])){
//         map.set(s[i],1)
//     }
//     else{
//         map.set(s[i],map.get(s[i])+1)
//     }
// }
// for(let j=0;j<s.length;j++){
//     if(map.get(s[j])==1){
//         return j
//     }
// }
//  return -1
// }
// let res = UniqueCharacter("leetcode")
// console.log(res);

// ranson note
//     function Rans(ransomNote, magazine){
//             let map1 = new Map()
//             for(let i=0;i<ransomNote.length;i++){
//                 if(!map1.has(ransomNote[i])){
//                     map1.set(ransomNote[i],1)
//                 }else{
//                     map1.set(ransomNote[i],map1.get(ransomNote[i])+1)
//                 }
//             }
//             for(let j=0;j<magazine.length;j++){
//                 if(map1.has(magazine[j]))
//                     map1.set(magazine[j],map1.get(magazine[j])-1)
//             }

//             for (let value of map1.values()) {
//             if (value > 0) {
//                 return false;
//             }
//         }
//             return true
// };
// let res  = Rans("aa","ab")
// console.log(res);

// majority element

// function majority(nums){
// let  n = nums.length
// let map = new Map()
// for(let i=0 ;i<nums.length;i++){
//     if(!map.has(nums[i])){
//         map.set(nums[i],1)
//     }else{
//         map.set(nums[i],map.get(nums[i])+1)
//     }
// }
// for(let j=0;j<n;j++){
//   let data  = map.get(nums[j])
//     if(data>n/2){
//         return nums[j]
//     }
// }
// }

// let res = majority([3,2,3])
// console.log(res);

// isomorphic
// function Isomorphic(s,t){
//     let map1 = new Map()
//     let map2 = new Map()
//     if(s.length != t.length){
//         return false
//     }

//     for(let i=0;i<s.length;i++){
//        let  char1 = s[i]
//        let char2  = t[i]
//        if(map1.has(char1)){
//         if(map1.get(char1)!== char2)
//             return false
//        }else{
//             map1.set(char1,char2)
//         }
//         if(map2.has(char2)){
//             if(map2.get(char2)!==char1)
//                 return false
//         }else{
//         map2.set(char2,char1)
//         }
//     }
//     return true
// }
// let res = Isomorphic("egg","add")
// console.log(res);

// roman to integer

function roman(s) {
  s = s.toUpperCase();
  console.log(s);
  let sum = 0;
  let map1 = new Map();
  map1.set("I", 1);
  map1.set("V", 5);
  map1.set("X", 10);
  map1.set("L", 50);
  map1.set("C", 100);
  map1.set("D", 500);
  map1.set("M", 1000);

  for (let i = 0; i < s.length; i++) {
    const current = map1.get(s[i]);
    const next = map1.get(s[i + 1]);
    if (next && current < next) {
      sum -= current;
    } else {
      sum += current;
    }
  }
  return sum
}
let res = roman("MCMXCIV");
console.log(res);
