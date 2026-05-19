//two pointers = are the pattern where u use two points i and j but this pattern is applicable when u have a  sorted array

// remove element

// function removeEl(nums,val){
// let k=0,i=0
// while(i<nums.length){
// if(nums[i]!=val){
//     let temp= nums[i]
//     nums[i] = nums[k]
//     nums[k] =temp
//     k++
// }
//  i++
// }

// return nums.slice(0,k)
// }

// let res = removeEl([3,2,2,3],3)
// console.log(res);

// find the index of the first occurence in a string
// function strStr(haystack,needle){
//     if(!needle) return 0
// for(let i=0;i<haystack.length;i++){
//     let ismatch =true
//     for(let j=0;j<needle.length;j++){
//         if(haystack[i+j]!=needle[j]){
//             ismatch = false
//             break
//         }
//     }
//     if(ismatch) return i
// }
// return -1
// }
// let res = strStr("hello","ll")
// console.log(res);

// function palindrome(s) {
//   s = s.replace(/[^a-zA-Z0-9]/g,"").toLowerCase()
//   let i = 0,j = s.length - 1;
// while (i < j){
//     if (s[i] != s[j]) {
//       return false;
//     }
//     i++;
//     j--;
//   }
//   return true;
// }

// let res = palindrome("race a car");
// console.log(res);

