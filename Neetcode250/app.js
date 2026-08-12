// function oddNumbersLessThanTen() {
//   let currentNumber = 1; //step 1
 
//   while (currentNumber < 10) { //step2
//     if (currentNumber % 2 !== 0) { //step3
//       console.log(currentNumber);//step4
//     }

//     currentNumber += 1;//step5
//   }
// }

// oddNumbersLessThanTen()

// let arr = [1, 2, 3, 4, 5];

// function getConcatenation(nums){
// let ans = new Array(nums.length*2)
// for(let i =0;i<ans.length;i++){
 
// }
// return ans
// }

// let res = getConcatenation([1,4,1,2])
// console.log(res);

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


function isAnagram(s,t){
if(s.length!==t.length){
    return false
}
let sorted_S = s.split("").sort().join("")
let sorted_t = t.split("").sort().join("")
if(sorted_S!==sorted_t){
    return false
}else{
    return true
}

}
let res = isAnagram("racecar","carrace")
console.log(res);



