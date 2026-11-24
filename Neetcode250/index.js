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

function  hasDuplicate(nums){
for(let i=0;i<nums.length;i++){
    for(j=i;j<nums.length;j++){
        if(nums[i]==nums[j]){
            return true
        }
    }
}

return false
}

let res = hasDuplicate([1, 2, 3, 3])
console.log(res);
